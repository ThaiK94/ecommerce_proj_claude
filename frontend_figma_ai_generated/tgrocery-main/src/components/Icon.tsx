type IconProps = {
  /** Path to an SVG exported from Figma, e.g. /icons/search.svg */
  src: string;
  /** Box size in px — matches the icon frame in the design */
  size: number;
  className?: string;
};

/** Decorative icon. Labels belong on the surrounding control. */
export function Icon({ src, size, className = "" }: IconProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
