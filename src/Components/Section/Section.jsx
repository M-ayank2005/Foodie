const Section = ({ customStyle, children }) => (
    <section className={`w-full md:py-12 py-6 px-4 ${customStyle}`}>
        <div className="lg:container mx-auto w-full flex flex-wrap items-center justify-between">
            { children }
        </div>
    </section>
)

export default Section
