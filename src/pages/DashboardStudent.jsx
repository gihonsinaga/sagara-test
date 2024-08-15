import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  editStudent,
  deleteStudent,
} from "../redux/reducers/studentReducers";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  UsersIcon,
  MenuAlt2Icon,
  ArrowLeftIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: false },
  {
    name: "Students",
    href: "/dashboardStudent",
    icon: UsersIcon,
    current: true,
  },
  { name: "Home", href: "/", icon: ArrowLeftIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardStudent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const students = useSelector((state) => state?.student?.students);

  const handleAddStudent = (studentData) => {
    dispatch(addStudent(studentData));
    setIsModalOpen(false);
  };

  const [editingStudent, setEditingStudent] = useState(null);

  const handleEditStudent = (studentData) => {
    dispatch(editStudent(studentData));
    setIsModalOpen(false);
    setEditingStudent(null);
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id));
    }
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
                Data Student
              </h1>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <div className="flex-1">
                  <button
                    className="bg-red-800 text-white p-2 rounded-md text-sm"
                    onClick={() => setIsModalOpen(true)}
                  >
                    + Add User
                  </button>

                  {isModalOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                      <div className="flex items-center justify-center min-h-screen px-4">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Add New Student
                            </h3>
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => setIsModalOpen(false)}
                            >
                              &times;
                            </button>
                          </div>

                          <div className="px-4 py-5 sm:p-6">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                const studentData = {
                                  id: editingStudent
                                    ? editingStudent.id
                                    : Date.now(),
                                  fullName: e?.target?.fullName?.value,
                                  email: e?.target?.email?.value,
                                  phoneNumber: e?.target?.phoneNumber?.value,
                                  instance: e?.target?.instance?.value,
                                  createdAt: editingStudent
                                    ? editingStudent.createdAt
                                    : new Date().toLocaleString(),
                                };
                                if (editingStudent) {
                                  handleEditStudent(studentData);
                                } else {
                                  handleAddStudent(studentData);
                                }
                              }}
                            >
                              <div className="space-y-3">
                                <div>
                                  <label>Full Name</label>
                                  <input
                                    name="fullName"
                                    placeholder="jhon"
                                    className="w-full mb-2 p-2 border rounded"
                                    defaultValue={
                                      editingStudent?.fullName || ""
                                    }
                                  />
                                </div>

                                <div>
                                  <label className="">Email</label>
                                  <input
                                    name="email"
                                    placeholder="jhondoe@gmail.com"
                                    className="w-full mb-2 p-2 border rounded"
                                    defaultValue={editingStudent?.email || ""}
                                  />
                                </div>

                                <div>
                                  <label>Phone Number</label>
                                  <input
                                    name="phoneNumber"
                                    placeholder="+62 81263812"
                                    className="w-full mb-2 p-2 border rounded"
                                    defaultValue={
                                      editingStudent?.phoneNumber || ""
                                    }
                                  />
                                </div>

                                <div>
                                  <label>Instance</label>
                                  <input
                                    name="instance"
                                    placeholder="Instance"
                                    className="w-full mb-2 p-2 border rounded"
                                    defaultValue={
                                      editingStudent?.instance || ""
                                    }
                                  />
                                </div>
                              </div>

                              <div className="flex justify-end">
                                <button
                                  type="submit"
                                  className="px-4  bg-red-800 text-white p-2  rounded-md"
                                >
                                  {editingStudent ? "Update" : "Save"}
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Display students */}
                  <div className="mt-4">
                    <table className="w-full border-collapse border mt-10">
                      <thead className="text-gray-400 font-light text-sm">
                        <tr>
                          <th className="border p-2 text-start py-4 ">
                            Full Name
                          </th>
                          <th className="border p-2 text-start">
                            Email Address
                          </th>
                          <th className="border p-2 text-start">
                            Phone Number
                          </th>
                          <th className="border p-2 text-start">Instance</th>
                          <th className="border p-2 text-start">Created At</th>
                          <th className="border p-2 text-start">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="font-semibold text-sm">
                        {students?.map((student) => (
                          <tr key={student.id}>
                            <td className="border p-2">{student?.fullName}</td>
                            <td className="border p-2">{student?.email}</td>
                            <td className="border p-2">
                              {student.phoneNumber}
                            </td>
                            <td className="border p-2">{student?.instance}</td>
                            <td className="border p-2">{student?.createdAt}</td>
                            <td className="border p-2">
                              <button
                                onClick={() => {
                                  setEditingStudent(student);
                                  setIsModalOpen(true);
                                }}
                                className="bg-blue-500 text-white p-2 rounded-md mr-2 text-sm"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteStudent(student?.id)}
                                className="bg-red-500 text-white p-2 rounded-md text-sm"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
