import React from 'react'
import { team } from '@/data/site-details'


export default function TeamSection() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our team</h2>
        <p className="mt-6 text-lg leading-8">
            Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere
            repellendus ut eos dolores similique.
        </p>
        </div>
        <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
        {team.map((person) => (
            <li key={person.name}>
            <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight">{person.name}</h3>
            <p className="text-sm leading-6">{person.role}</p>
            </li>
        ))}
        </ul>
    </div>
  )
}
