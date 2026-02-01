interface LogoProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function Logo({ color = '#c9a227', size = 40, className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 48"
      width={size}
      height={size * 1.2}
      className={className}
      fill="none"
    >
      {/* Верхний шеврон (стрелка вверх) */}
      <path
        d="M20 4 L28 12 L20 20 L12 12 Z"
        fill={color}
      />
      {/* Средний шеврон */}
      <path
        d="M20 16 L26 22 L20 28 L14 22 Z"
        fill={color}
        opacity="0.85"
      />
      {/* Нижний шеврон */}
      <path
        d="M20 28 L24 32 L20 36 L16 32 Z"
        fill={color}
        opacity="0.7"
      />
      {/* Стебель */}
      <path
        d="M20 36 L20 44"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Левый лист */}
      <path
        d="M20 40 L14 36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Правый лист */}
      <path
        d="M20 40 L26 36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

// Цвета для каждого направления
export const brandColors = {
  main: '#c9a227',      // Золотой - основной
  development: '#c9a227', // Золотой - девелопмент
  intellect: '#2563eb',   // Синий - интеллект
  techno: '#16a34a',      // Зелёный - техно
  land: '#059669',        // Изумрудный - лэнд
  legal: '#7c3aed',       // Фиолетовый - лигал
  invest: '#dc2626',      // Красный - инвест
};
