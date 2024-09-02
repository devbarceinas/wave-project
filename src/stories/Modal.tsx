import { IoCloseOutline } from "react-icons/io5";
import { Button } from "./Button";
import './modal.css';

export interface ModalProps {
  title: string;
  isOpen: boolean;
  cliente: string;
  correo: string;
  noDeOrden: string;
  enviadoEl: string;
  onClose: () => void;
  onAction: () => void;
};

export const Modal = ({
  title,
  isOpen,
  cliente,
  correo,
  noDeOrden,
  enviadoEl,
  onClose,
  onAction
}: ModalProps) => {

  if (!isOpen) return null;

  return (
    <div className="storybook-modal--overlay">
      <div className="storybook-modal--content">
        <div className="storybook-modal--header">
          <h2>{title}</h2>
          <IoCloseOutline
            className="storybook-modal--close"
            onClick={onClose}
          />
        </div>
        <div className="sotorbook-modal--body">
          <div className="storybook-modal--detail">
            <strong className="storybook-modal--detail-title">Cliente</strong>
            <p className="storybook-modal--detail-subtitle">{cliente}</p>
            <strong className="storybook-modal--detail-title">Correo</strong>
            <p className="storybook-modal--detail-subtitle">{correo}</p>
          </div>
          <div className="storybook-modal--detail">
            <strong className="storybook-modal--detail-title">No. de orden</strong>
            <p className="storybook-modal--detail-subtitle">{noDeOrden}</p>
            <strong className="storybook-modal--detail-title">Enviado el</strong>
            <p className="storybook-modal--detail-subtitle">{enviadoEl}</p>
          </div>
          <div className="storybook-modal--cost">
            <div className="storybook-modal--detail">
              <strong className="storybook-modal--detail-cost-title">Costo</strong>
              <div className="storybook-modal--detail-cost">
                <p className="storybook-modal--detail-cost-subtitle">Productos</p>
                <p className="storybook-modal--detail-cost-subtitle">$25,850.00</p>
              </div>
              <div className="storybook-modal--detail-cost">
                <p className="storybook-modal--detail-cost-subtitle">Precio</p>
                <p className="storybook-modal--detail-cost-subtitle">$1,032.00</p>
              </div>
              <div className="storybook-modal--detail-cost">
                <p className="storybook-modal--detail-cost-subtitle">Total</p>
                <p className="storybook-modal--detail-cost-subtitle">$26,882.00</p>
              </div>
            </div>
         </div>
        </div>
        <div className="sotrybook-modal--footer">
          <Button
            primary={false}
            label="Volver"
            onClick={onAction}
          />
        </div>
      </div>
    </div>
  );
};