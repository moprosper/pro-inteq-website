// Decorative outline icons. They are hidden from assistive technology, so the
// surrounding text must carry the meaning.

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

function Icon({ className = "h-5 w-5", strokeWidth = 2, d }: IconProps & { d: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d={d} />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return <Icon className="h-4 w-4" {...props} d="M17 8l4 4m0 0l-4 4m4-4H3" />;
}

export function CheckIcon(props: IconProps) {
  return <Icon {...props} d="M5 13l4 4L19 7" />;
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Icon
      {...props}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <Icon
      {...props}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon
      {...props}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon
      {...props}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  );
}

export function MapPinIcon({ className = "h-5 w-5", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return <Icon className="h-4 w-4" {...props} d="M19 9l-7 7-7-7" />;
}

export function UserIcon(props: IconProps) {
  return <Icon strokeWidth={1.5} {...props} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
}
