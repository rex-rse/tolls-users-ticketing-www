import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/solid';
import React from 'react';

interface TableProps {
  headers: any;
  data: any;
  isLoading: any;
  children?: React.ReactNode;
  countPage?: any;
  pageParam?: any;
  setPageParam?: any;
  // Tomar en cuenta que el mensaje se corta en '. '
  errorMessage?: string;
}

const Table = ({
  headers,
  data,
  isLoading,
  errorMessage,
  pageParam,
  setPageParam,
  countPage,
}: TableProps) => {
  const headerKeys: any[] = [];
  for (const header of headers) {
    headerKeys.push(header.key);
  }
  let centerIdx = 1;
  if (headers.length % 2 == 0) {
    centerIdx = headers.length / 2;
    console.log(centerIdx);
  } else {
    centerIdx = (headers.length + 1) / 2;
    // console.log('Impar: ' + centerIdx );
  }

  const handleNextPage = () => {
    setPageParam(pageParam + 1);
  };

  const handlePreviousPage = () => {
    setPageParam(pageParam - 1);
  };

  return (
    <div className=" w-full">
      <div className="hidden md:block">
        <div className="text-md table w-full rounded-t-lg bg-white shadow-md">
          <div className="table-header-group font-medium uppercase text-gray-800 antialiased">
            <div className="table-row">
              {headers.map((header) => {
                return header.id === '1' ? (
                  <div
                    className="table-cell rounded-tl-lg bg-red-400 py-4 pl-10 text-white font-bold"
                    key={header.id}
                  >
                    {header.header}
                  </div>
                ) : header.id == headers.length ? (
                  <div
                    className="table-cell rounded-tr-lg bg-red-400 px-10 py-4 text-white font-bold"
                    key={header.id}
                  >
                    {header.header}
                  </div>
                ) : (
                  <div
                    className="table-cell bg-red-400 py-4 pl-10 text-white font-bold"
                    key={header.id}
                  >
                    {header.header}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="table-row-group text-black antialiased">
            {isLoading ? (
              <>
                <div className="table-row">
                  {headerKeys.map((headerKey) => {
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        <div className="h-6 w-5/6 animate-pulse rounded-md bg-gray-200" />
                      </div>
                    );
                  })}
                </div>
                <div className="table-row">
                  {headerKeys.map((headerKey) => {
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        <div className="h-6 w-5/6 animate-pulse rounded-md bg-gray-200" />
                      </div>
                    );
                  })}
                </div>
                <div className="table-row">
                  {headerKeys.map((headerKey) => {
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        <div className="h-6 w-5/6 animate-pulse rounded-md bg-gray-200" />
                      </div>
                    );
                  })}
                </div>
                <div className="table-row">
                  {headerKeys.map((headerKey) => {
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        <div className="h-6 w-5/6 animate-pulse rounded-md bg-gray-200" />
                      </div>
                    );
                  })}
                </div>
                <div className="table-row">
                  {headerKeys.map((headerKey) => {
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        <div className="h-6 w-5/6 animate-pulse rounded-md bg-gray-200" />
                      </div>
                    );
                  })}
                </div>
                <div className="table-row">
                  {headerKeys.map((headerKey) => {
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        <div className="h-6 w-5/6 animate-pulse rounded-md bg-gray-200" />
                      </div>
                    );
                  })}
                </div>
                <div className="table-row">
                  {headerKeys.map((headerKey) => {
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        <div className="h-6 w-5/6 animate-pulse rounded-md bg-gray-200" />
                      </div>
                    );
                  })}
                </div>
                <div className="table-row">
                  {headerKeys.map((headerKey) => {
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        <div className="h-6 w-5/6 animate-pulse rounded-md bg-gray-200" />
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              data.map((row) => {
                return (
                  <div className="table-row" key={row.id}>
                    {headerKeys.map((headerKey) => {
                      const value = row[headerKey];
                      return (
                        <div
                          className="table-cell border-t py-4 pl-10 align-middle"
                          key={headerKey}
                        >
                          {value}
                        </div>
                      );
                    })}
                  </div>
                );
              })
            )}
            {/* {data.map((row) => {
              return (
                <div className="table-row" key={row.id}>
                  {headerKeys.map((headerKey) => {
                    const value = row[headerKey];
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        {value}
                      </div>
                    );
                  })}
                </div>
              );
            })} */}
          </div>
        </div>
        {data.length == 0 && !isLoading ? (
          <div className="flex items-center justify-center border-t bg-white py-6 font-medium text-gray-500/70">
            {errorMessage}
          </div>
        ) : (
          <></>
        )}
        <nav
          className="mb-10 flex items-center justify-between rounded-b-lg border-t border-gray-200 bg-white px-4 py-4 shadow-md sm:px-6"
          aria-label="Pagination"
        >
          <div className="ml-3 hidden sm:block">
            <p className="text-sm text-gray-700">
              P??gina <span className="font-medium">{pageParam}</span> de{' '}
              <span className="font-medium">
                {countPage == 0 ? 1 : countPage}
              </span>
            </p>
          </div>
          <div className="mr-3 flex flex-1 justify-between sm:justify-end">
            <button
              onClick={handlePreviousPage}
              disabled={pageParam === 1}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <ArrowNarrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={handleNextPage}
              disabled={pageParam === countPage}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <ArrowNarrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        <div className="space-y-3 rounded-lg bg-gray-100 p-4 shadow">
          <div className="flex items-center justify-between space-x-2">
            {data.map((row) => {
              return (
                <div className="table-row" key={row.id}>
                  {headerKeys.map((headerKey) => {
                    const value = row[headerKey];
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10 align-middle"
                        key={headerKey}
                      >
                        {value}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
