import { useEffect, useState } from 'react';
import { ToastMsgProp } from './interface';
import * as S from './style';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BiError } from 'react-icons/bi';
import { VscError } from 'react-icons/vsc';
import { useToast } from './ToastContext';
const ToastMsg = () => {
	const { isShow, message, type, hideToast } = useToast();
	const [isVisible, setVisible] = useState(false);
	useEffect(() => {
		if (isShow) {
		}
	}, [isShow, hideToast]);

	useEffect(() => {
		if (isVisible) {
			const timer1 = setTimeout(() => {
				setVisible(false);
			}, 2000);
			return () => clearTimeout(timer1);
		} else {
			const timer2 = setTimeout(() => {
				hideToast();
			}, 1000);
			return () => clearTimeout(timer2);
		}
	}, [isVisible]);
	useEffect(() => {
		if (isShow) {
			const timer3 = setTimeout(() => {
				setVisible(true);
			}, 100);
			return () => clearTimeout(timer3);
		}
	}, [isShow]);

	useEffect(() => {
		console.log('isShow=', isShow, 'isVisible=', isVisible);
	}, [isShow, isVisible]);
	if (!isShow) return null;
	return (
		<S.ToastMsgStyleContainer $type={'warning'} $isVisible={isVisible}>
			<div className="toast-icon">
				{type === 'info' ? (
					<IoInformationCircleOutline />
				) : type === 'success' ? (
					<IoMdCheckmarkCircleOutline />
				) : type === 'error' ? (
					<VscError />
				) : (
					// type === 'warning'
					<BiError />
				)}
			</div>
			<p>{message}</p>
		</S.ToastMsgStyleContainer>
	);
};

export default ToastMsg;
