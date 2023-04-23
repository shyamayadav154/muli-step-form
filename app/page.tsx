
import PersonalInfoForm from "@/components/PersonalInfoForm"


function PersonalInfo() {
  return (
    <section className="flex h-full flex-col">
      <article>
        <h1 className="text-3xl font-bold text-primary-marineBlue">
          Personal Info
        </h1>
        <p>Please provide your name, email address, and phone number.</p>
      </article>

      <PersonalInfoForm />
    </section>
  )
}

export default PersonalInfo

