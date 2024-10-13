const Section = ({ customStyle, children }) => (
    <section className={`w-full py-5 ${customStyle}`}>
        <div className="lg:container mx-auto w-full px-3 flex flex-wrap items-center justify-between">
            { children }
        </div>
    </section>
)

export default Section
