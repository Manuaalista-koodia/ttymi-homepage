interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section = ({ title, children, className = '', titleClassName = '' }: SectionProps) => {
  return (
    <div className={`px-6 py-12 md:px-24 lg:px-32 ${className}`}>
      {title && <h1 className={`text-4xl md:text-5xl font-semibold mb-4 ${titleClassName}`}>{title}</h1>}
      {children}
    </div>
  );
};

export default Section;
