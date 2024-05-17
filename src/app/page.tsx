import Image from "next/image";
import PEOPLE from "./PEOPLE.json"

export default function Home() {
	return (
		<main>
			<div className="hello">
				<Image alt="demo club image" src="/demo-club.jpeg" width={375} height={375}/>
				<ul>
					{PEOPLE.map(person => (
						<li key={person.name} ><a href={`https://x.com/${person.twitter}`} title={person.name}>{person.name}</a></li>
					))}
				</ul>
			</div>
		</main>
	)
}
