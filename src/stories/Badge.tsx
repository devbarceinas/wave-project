import './badge.css';

export interface BadgeProps {
  variant: 'success' | 'warning' | 'danger';
  text: String;
};

export const Badge = ({
  variant,
  text
}: BadgeProps) => {

  return (
    <span className={`storybook-badge storybook-badge--${variant}`}>
      {text}
    </span>
  );
};