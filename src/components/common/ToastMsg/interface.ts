export interface ToastMsgProp {
	type?: 'info' | 'error' | 'success' | 'warning';
	message: string;
	isShow: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ToastMsgStyleProp {
	$type?: 'info' | 'error' | 'success' | 'warning' | null;
	$isVisible: boolean;
}
