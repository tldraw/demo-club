import Image from "next/image";
import PEOPLE from "./PEOPLE.json"

export default function Home() {
	return (
		<main>
			<div className="hello">
				<Image alt="demo club image" src="/demo-club.jpeg" width={600} height={600}/>
				<ul>
					{PEOPLE.map(person => (
						<li key={person.name}><a href="https://x.com/steveruizok" target="_blank">{person.name}</a></li>
					))}
				</ul>
			</div>
		</main>
	)
}
