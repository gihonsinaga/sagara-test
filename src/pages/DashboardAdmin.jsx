import React from "react";
import { useSelector } from "react-redux";
import {
  selectTotalStudents,
  selectStudentsByInstance,
} from "../redux/reducers/studentReducers";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  UsersIcon,
  MenuAlt2Icon,
  ArrowLeftIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  {
    name: "Students",
    href: "/dashboardStudent",
    icon: UsersIcon,
    current: false,
  },
  { name: "Home", href: "/", icon: ArrowLeftIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const totalStudents = useSelector(selectTotalStudents);
  const studentsByInstance = useSelector(selectStudentsByInstance);

  const chartData = {
    labels: Object.keys(studentsByInstance),
    datasets: [
      {
        label: "Number of Students",
        data: Object.values(studentsByInstance),
        backgroundColor: "rgba(165, 21, 53, 53)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Students by Instance",
      },
    },
  };

  return (
    <>
      {/* Mobile sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" /> */}
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-4 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </Dialog>
      </Transition.Root>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-[#1C1C1C]">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-[#1C1C1C]">
            <img className="h-12 mt-10 w-auto" src="/assets/Logo2.png" />
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1 mt-10">
              <div className="text-gray-400 tracking-wide text-xs mb-3">
                MENU
              </div>

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-red-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-300"
                        : "text-gray-400 group-hover:text-gray-300",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-2">Total Students</h2>
                  <p className="text-3xl font-bold">{totalStudents}</p>
                  <p className="text-sm text-green-500">
                    8.5% Up from yesterday
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-2">
                    Total Certified Students
                  </h2>
                  <p className="text-3xl font-bold">-</p>
                  <p className="text-sm text-green-500">
                    8.5% Up from yesterday
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-2">
                    Average Certification Score
                  </h2>
                  <p className="text-3xl font-bold">-</p>
                  <p className="text-sm text-green-500">
                    8.5% Up from yesterday
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Students</h2>
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
