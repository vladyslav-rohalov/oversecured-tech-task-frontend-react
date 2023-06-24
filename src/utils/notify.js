import toast from 'react-hot-toast';

export function notifySucces(message) {
  return toast.success(message);
}

export function notifyError(message) {
  return toast.error(message);
}
