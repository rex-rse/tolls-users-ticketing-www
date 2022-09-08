import InputV2 from '@components/inputs/InputV2';
import { CreditCardIcon, UserCircleIcon } from '@heroicons/react/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import LandingLayout from '@layouts/LandingLayout';
import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Select from '@components/inputs/Select';
import { useAxiosExternal } from 'hooks/useAxiosExternal';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { useAppDispatch } from '@store/hooks';
import { open } from '@store/counter/snackbarReducer';

const methods = [
  {
    value: 'V',
    label: 'V',
  },
  {
    value: 'P',
    label: 'P',
  },
  {
    value: 'J',
    label: 'J',
  },
];

const codes = [
  {
    value: '0414',
    label: '0414',
  },
  {
    value: '0424',
    label: '0424',
  },
  {
    value: '0412',
    label: '0412',
  },
  {
    value: '0416',
    label: '0416',
  },
  {
    value: '0426',
    label: '0416',
  },
];

const MobilePay = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    // resolver: yupResolver(),
  });
  const { requester } = useAxiosExternal();
  const dispatch = useAppDispatch();
  const { mutate } = useMutation(
    (formData: any) => {
      return requester({
        method: 'POST',
        data: formData,
        url: 'https://biopago.banvenez.com/ipg/api/Payment',
      });
    },
    {
      onSuccess: (response) => {
        const { data } = response;

        console.log(data);
      },
      onError: (error: AxiosError) => {
        dispatch(open({ text: error.response.statusText, type: 'error' }));
      },
    }
  );

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
    mutate({
      currency: 1,
      amount: 50,
      title: 'Pago de Planillas',
      description: 'Liquidaciones.',
      reference: '18921842-FAC',
      letter: 'V',
      number: '21149009',
      cellphone: '04122741219',
      email: 'i.alvarez@rsegrp.com',
      urlToReturn: 'http://www.user-toll-qa.local:4000/',
    });
  };

  return (
    <div className="mt-28 w-5/6 rounded-xl bg-gray-100 p-24 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="border-r-2">
          <CreditCardIcon className="mr-16 h-20 pr-10 text-emerald-600/70" />
        </div>
        <h1 className="ml-16 w-full border-grey text-center text-4xl font-bold tracking-wide text-emerald-600/70">
          Banco de Venezuela
        </h1>
      </div>
      <div className=" mt-12 flex  place-content-center">
        {/* <div className="mt-6 flex items-center">
          <h3 className="mr-4 text-lg  font-bold">Correo:</h3>
          <h3 className="mr-auto text-lg">{'muu'}</h3>
        </div> */}
        <div className="">
          <form className="mr-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
              <div className="w-1/3 pr-4">
                <Select
                  label="V"
                  name="nif_type"
                  options={methods}
                  // errorMessage={errors.nif_type?.message}
                  register={register}
                />
              </div>
              <div className="w-2/3">
                <InputV2
                  label="Cédula"
                  name="nif"
                  type="text"
                  errorMessage={errors.nif?.message}
                  register={register}
                />
              </div>
            </div>
            <div className=" flex items-center ">
              <div className="w-1/3 pr-4">
                <Select
                  label="Código"
                  name="code"
                  options={codes}
                  // errorMessage={errors.nif_type?.message}
                  register={register}
                />
              </div>
              <div className="w-2/3">
                <InputV2
                  label="Teléfono"
                  name="phone"
                  type="text"
                  errorMessage={errors.phone?.message}
                  register={register}
                />
              </div>
            </div>
            <div className="mt-10 ">
              <InputV2
                label="Bancos"
                name="password"
                type="text"
                errorMessage={errors.password?.message}
                register={register}
              />
              <div className="mt-10">
                <InputV2
                  label="Monto"
                  name="confirm_password"
                  type="text"
                  errorMessage={
                    // @ts-ignore
                    errors.confirm_password && 'Las contraseñas deben coincidir'
                  }
                  register={register}
                />
              </div>
            </div>

            <input
              type="submit"
              value="Confirmar"
              className="  mt-14 cursor-pointer   rounded bg-emerald-600/70 px-4 py-2 text-center font-semibold text-white shadow-md hover:bg-emerald-600/50 focus:outline-none focus:ring focus:ring-emerald-600/50 focus:ring-opacity-80 focus:ring-offset-2"
            />
          </form>

          <>
            {/* <h3 className="mr-4 text-lg font-bold">Teléfono:</h3>
            <h3 className="mr-auto text-lg">{'muu'}</h3> */}
          </>

          {/* <button type="button" onClick={() => console.log('click')}>
            <PencilAltIcon className="h-5 text-gray-600 hover:text-emerald-500" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

MobilePay.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default MobilePay;
