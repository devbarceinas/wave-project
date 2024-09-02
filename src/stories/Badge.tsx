import './badge.css';

export interface BadgeProps {
  variant: 'Enviado' | 'Pendiente' | 'Cancelado';
  text: String;
};

export const Badge = ({
  variant,
  text
}: BadgeProps) => {

  return (
    <span className={`storybook-badge storybook-badge--${variant.toLowerCase()}`}>
      {text}
    </span>
  );
};