const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="w-full px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default SectionWrapper;

  