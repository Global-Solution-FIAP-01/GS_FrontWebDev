import Card from "./components/Card"
import { CARD_DATA } from "../mocks/texts"

const CardSection = () => {
  return (
    <section className="flex items-center justify-center w-full bg-surface p-4">
      <div className="grid grid-cols-4 gap-20">
        {CARD_DATA.map((item, index) => (
        <Card key={index} data={item} />
        ))}
      </div>
    </section>
  )
}

export default CardSection