import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../style"

const Tech = () => {

  const icons = Object.values(technologies).map((technology) => technology.icon);
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          What have I worked with ?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <BallCanvas icons={icons} />
      </div >
    </>
  )
}

export default SectionWrapper(Tech, "")