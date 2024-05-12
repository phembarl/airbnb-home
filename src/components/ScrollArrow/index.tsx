import { Icon } from '@iconify/react';

interface ScrollArrowProps {
  direction: 'left' | 'right';
  className?: string;
}

const ScrollArrow = ({ direction, className }: ScrollArrowProps) => {
  return (
    <div
      className={`border border-airbnbGrey2 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer bg-white hover:scale-[1.05] hover:shadow-md transition-all ${className}`}
    >
      <Icon
        icon={
          direction === 'left' ? 'mingcute:left-line' : 'mingcute:right-line'
        }
        width="18"
        height="18"
        className="text-black"
      />
    </div>
  );
};

export default ScrollArrow;
