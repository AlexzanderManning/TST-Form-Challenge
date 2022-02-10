import { Dialog, Transition } from "@headlessui/react";

export default function Alert({showAlert, success, children}) {

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <Transition
      show={showAlert}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`${success === true ? 'bg-green-100' : 'bg-red-100'} rounded`}>
        <div className="px-2 md:px-4 py-2">
        {children}
        </div>
      </div>
    </Transition>
  );
}
