import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "../../data/formStyles";
import { normalizePhoneNumber } from "../../utils/maskFormat";
import { regexFormats } from "../../utils/regexFormat";

import { capitalize } from "../../utils/textFormat";
import FormInput from "../../components/FormInput/FormInput";
import FormButton from "../../components/FormButton/FormButton";

const BASE_API = process.env.REACT_APP_API_URL;

const getFormatedDate = (currentDate) => {
  return currentDate.split("/").reverse().join("-");
};

const schema = yup
  .object({
    name: yup
      .string()
      .matches(
        regexFormats.latinLetters,
        "Name can only contain Latin letters."
      )
      .matches(regexFormats.fullname, "Please enter your full name.")
      .test(
        "len",
        "Name must be 5 characters or more",
        (val) => val.length >= 5
      )
      .required("Name is required"),
    birthdate: yup
      .date()
      .typeError("Invalid date")
      .min(
        getFormatedDate("01/01/1900"),
        "Birthdate must be later than 01/01/1900"
      )
      .max(
        getFormatedDate(new Date().toLocaleDateString()),
        `Birthdate be at earlier than ${new Date().toLocaleDateString()}`
      )
      .required("Birthdate is required"),
    cellphone: yup
      .string()
      .required("Cell phone number is required")
      .test(
        "len",
        "Cell phone must be 11 characters",
        (val) => val.replace(regexFormats.onlyNumbers, "").length === 11
      ),
    email: yup.string().email("E-mail is not valid"),
    meet_us: yup.string().ensure().required("Topic is required!"),
  })
  .required();

const Client = ({ formData, callback }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const cellphoneValue = watch("cellphone");

  useEffect(() => {
    setValue("cellphone", normalizePhoneNumber(cellphoneValue));
  }, [cellphoneValue, setValue]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      callback(formState.isSubmitSuccessful);
    }
  }, [formState, reset, callback]);

  const handleCreateUser = async (data) => {
    try {
      axios.post(`${BASE_API}/clients/`, data);
    } catch (e) {
      throw new Error(e);
    }
  };

  const onSubmit = (data) => {
    const name = capitalize(data.name);
    const birthdate = new Date(data.birthdate).toISOString().split("T")[0];
    const email = data.email.toLowerCase();
    const cellphone = data.cellphone.replace(regexFormats.onlyNumbers, "");
    const meet_us_id = +data.meet_us_id;
    const is_active = true;

    handleCreateUser({
      name,
      birthdate,
      email,
      cellphone,
      meet_us_id,
      is_active,
    });
  };

  return (
    <div className="mt-8 mb-14 mx-10">
      <div className="flex pb-8">
        <div className="flex items-end border-b-4 border-red-500 pr-2">
          <span className="font-bold text-red-500 text-4xl">N</span>
          <span className="font-semibold text-gray-700 text-3xl">
            ew client
          </span>
        </div>
        <div className="flex-1 text-right"></div>
      </div>
      <div className="w-full">
        <form
          id="frm_add_user"
          className="space-y-6"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-left">
            <FormInput
              labelFor="name"
              label="Name"
              inputStyle={errors.name ? styles["error"] : styles["default"]}
              placeholder="Ex.: Jhon Smith"
              inputRegister={register("name")}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="text-left">
            <FormInput
              labelFor="birthdate"
              label="Birthdate"
              inputType="date"
              inputStyle={
                errors.birthdate ? styles["error"] : styles["default"]
              }
              placeholder="dd/mm/yyyy"
              inputRegister={register("birthdate")}
            />
            {errors.birthdate && (
              <p className="text-red-600">{errors.birthdate.message}</p>
            )}
          </div>

          <div className="text-left">
            <FormInput
              labelFor="cellphone"
              label="Cell phone"
              inputType="tel"
              inputStyle={
                errors.cellphone ? styles["error"] : styles["default"]
              }
              placeholder="(99) 99999-9999"
              inputRegister={register("cellphone")}
            />
            {errors.cellphone && (
              <p className="text-red-600">{errors.cellphone.message}</p>
            )}
          </div>

          <div className="text-left">
            <FormInput
              labelFor="email"
              label="E-Mail"
              inputStyle={errors.email ? styles["error"] : styles["default"]}
              placeholder="Ex.: jhon.smith@email.com"
              inputRegister={register("email")}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="meet_us"
            >
              How did meet us?
            </label>
            <select
              className={errors.email ? styles["error"] : styles["default"]}
              defaultValue=""
              {...register("meet_us")}
            >
              <option value="" disabled className="text-slate-400">
                Select one...
              </option>
              <option value="1">Facebook</option>
              <option value="2">Instagram</option>
              <option value="3">WhatsApp</option>
              <option value="4">Others</option>
            </select>
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="flex w-full items-between align-center justify-center !mt-10 !space-x-20">
            <FormButton
              form="frm_add_user"
              type="button"
              value="Reset"
              label="Close"
              bgColor="bg-gray-600 hover:bg-gray-500"
              textColor="text-white"
              onClick={() => {
                reset();
                callback();
              }}
            />

            <FormButton
              form="frm_add_user"
              type="submit"
              value="Submit"
              label="Submit"
              bgColor="bg-red-600 hover:bg-red-500"
              textColor="text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Client;
