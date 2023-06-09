interface IconProps {
  fill: React.SVGAttributes<SVGSVGElement>["fill"];
  size: React.SVGAttributes<SVGSVGElement>["width" | "height"];
  bgColor: React.SVGAttributes<SVGSVGElement>["fill"];
}

export const LinkedInIcon = ({ fill, size, bgColor }: IconProps) => {
  return (
    <a href="https://www.linkedin.com/in/eze-jerez/" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550" fill={fill} width={size} height={size}>
        <circle fill={bgColor} cx="275" cy="275" r="275" />
        <g>
          <path d="m293.79,428.57h-63.57v-204.71h60.79v27.58c.84-.47,1.25-.56,1.4-.8,13.56-21.82,33.84-31.29,58.86-31.87,14.01-.32,27.7,1.44,40.51,7.58,16.6,7.95,25.89,21.76,31.04,38.88,4.14,13.77,5.57,27.95,5.67,42.21.27,39.5.16,79.01.2,118.52,0,.6-.08,1.2-.15,2.05h-63.61c0-1.37,0-2.81,0-4.25-.01-33.51.09-67.01-.13-100.51-.05-7.58-.65-15.27-2.02-22.72-3.87-21-17.54-28.1-37.06-25.8-17.8,2.1-27.6,12.51-30.37,31.77-1.01,7.02-1.47,14.18-1.5,21.28-.15,32-.07,64.01-.07,96.01v4.78Z" />
          <path d="m126.58,223.8h63.36v204.7h-63.36v-204.7Z" />
          <path d="m195.04,158.2c.11,20.37-16.41,37.25-36.57,37.37-20.27.12-37.16-16.8-37.16-37.23,0-20.1,16.5-36.73,36.65-36.91,20.31-.18,36.97,16.33,37.08,36.77Z" />
        </g>
      </svg>
    </a>
  );
};

export const GitHubIcon = ({ fill, size, bgColor }: IconProps) => {
  return (
    <a href="https://github.com/ezejerez" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550" fill={fill} width={size} height={size}>
        <circle fill={bgColor} cx="275" cy="275" r="275" />
        <path d="m467,290.68c-.96,7.03-1.53,14.14-2.92,21.08-13.71,68.58-53.59,115.62-117.72,142.58-3.44,1.45-6.98,2.71-10.56,3.79-8.18,2.46-13.69-1.59-13.69-10.03,0-15-.03-30,.17-45,.2-14.67-1.36-28.72-12.31-39.83,8.79-1.76,17.42-3.06,25.82-5.26,20.64-5.42,37.98-15.76,49-34.84,7.41-12.82,10.54-26.88,11.66-41.47,1.06-13.82.91-27.65-5.16-40.44-3.34-7.04-8.14-13.37-12.15-20.1-.72-1.21-1.42-3.01-1.06-4.21,4.57-14.92,3.3-29.55-1.36-44.21-1.16-3.66-3.41-4.53-6.35-3.92-7.05,1.47-14.34,2.55-20.92,5.28-8.36,3.48-16.06,8.51-24.15,12.67-1.59.82-3.81,1.34-5.47.93-30.07-7.39-60.08-7.37-90.15-.02-1.75.43-4.19-.14-5.77-1.11-11.97-7.34-24.14-14.14-38.08-17.02-11-2.27-12.34-1.45-15.09,9.41-3.25,12.87-3.56,25.67.75,38.41.31.91-.02,2.47-.66,3.19-16.31,18.36-20.11,40.11-17.65,63.69,1.56,14.98,5.09,29.28,13.39,42.05,11.17,17.18,27.68,26.67,46.98,31.76,8.3,2.19,16.84,3.52,25.44,5.27-.11.2-.28.77-.64,1.15-5.42,5.72-8.5,12.62-9.81,20.26-.47,2.74-1.7,4.06-4.23,4.92-14.15,4.77-28.12,5.86-40.61-3.89-4.71-3.67-8.47-8.77-11.97-13.71-6.85-9.65-15.08-17-27.24-18.68-2.05-.28-4.27-.22-6.28.25-1.52.36-3.72,1.39-4.01,2.53-.31,1.24,1.01,3.13,2.04,4.4,1.08,1.32,2.55,2.42,4.04,3.3,10.01,5.93,16.84,14.72,20.78,25.33,9,24.19,31.02,32.14,53.28,30.15,4.09-.37,8.16-1.06,12.5-1.64.1.92.27,1.86.28,2.81.11,9,.23,18,.27,27,.05,9.26-5.82,13.69-14.54,10.51-65.76-23.92-108.07-69.35-125.17-137.53-2.14-8.55-2.72-17.49-4.03-26.25-.18-1.21-.43-2.4-.64-3.61,0-7.75,0-15.5,0-23.26,1.05-7.4,1.8-14.85,3.18-22.18,16.08-85.16,89.16-148.81,176.83-153.97,45.73-2.69,87.72,8.94,124.95,35.87,41.2,29.8,66.81,69.81,76.1,119.98,1.29,6.96,1.97,14.03,2.94,21.05v22.51Z" />
      </svg>
    </a>
  );
};
