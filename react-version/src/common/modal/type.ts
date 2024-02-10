export interface ModalPropsType{
    title: string;
    open: boolean;
    children: React.ReactNode;
    onClose: ()=> void
}