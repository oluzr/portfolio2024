import { createContext, useContext, useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastContextType {
	isShow: boolean;
	message: string;
	type: ToastType | null;
	showToast: (msg: string, toastType: ToastType) => void;
	hideToast: () => void;
}
const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
	const [message, setMessage] = useState('');
	const [isShow, setShow] = useState(false);
	const [type, setType] = useState<ToastType | null>(null);

	const showToast = (msg: string, toastType: ToastType) => {
		setMessage(msg);
		setType(toastType);
	};

	const hideToast = () => {
		setMessage('');
		setType(null);
	};
	useEffect(() => {
		if (!message) {
			setShow(false);
		} else {
			setShow(true);
		}
	}, [message]);
	return (
		<ToastContext.Provider
			value={{ isShow, message, type, showToast, hideToast }}
		>
			{children}
		</ToastContext.Provider>
	);
};
const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('???');
	} else {
		const { isShow, message, showToast, hideToast, type } = context;
		return { isShow, message, showToast, hideToast, type };
	}
};
export { ToastProvider, useToast };
