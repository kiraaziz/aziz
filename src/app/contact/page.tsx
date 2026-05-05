import React from 'react'

const contactLinks = [
  {
    title: "Gmail",
    name: "mailto:kiraaziz2020@gmail.com"
  },
  {
    title: "Phone",
    name: "tel:+216 93 989 486"
  },
  {
    title: "Whats app",
    name: "https://wa.me/93989486"
  },
  {
    title: "Github",
    name: "https://github.com/kiraaziz"
  },
  {
    title: "Facebook",
    name: "https://www.facebook.com/aziz.kira.581/"
  },
  {
    title: "Instagram",
    name: "https://www.instagram.com/kiracancode/"
  },
  {
    title: "Linkedin",
    name: "https://www.linkedin.com/in/med-aziz-rjeibi/"
  },
  {
    title: "DEV.to",
    name: "https://dev.to/kiraaziz"
  }
];

export default function page() {
  return (
    <div>
      <div className="w-full mt-5 lg:flex flex-col items-center justify-center lg:py-24">
        <h1 className="to-start-animation text-2xl font-bold mx-auto mb-2 w-max">Get in Touch</h1>
        <p className="to-start-animation text-center max-w-2xl mx-auto text- text-foreground/70">
          Have a question, feedback, or just want to say hello? We'd love to hear from you! Feel free to reach out using the contact information below, and we'll get back to you as soon as possible.
        </p>
        <div className="mx-auto w-full lg:w-max mt-5 grid grid-cols-2 lg:grid-cols-3 gap-2">
          {contactLinks.map((link, idx) => (
            <a
              href={link.name}
              target="_blank"
              rel="noopener"
              className="flex lg:hover:text-foreground ease-in-out duration-200 lg:hover:bg-muted/10 lg:hover:gap-4 gap-3 p-4 bg-muted/20 to-start-animation backdrop-blur rounded-lg border w-full text-sm lg:last:items-center lg:last:justify-center text-foreground/70 lg:last:col-span-2"
              key={link.title}
            >
              <img
                src={`/contact/${link.title.toLowerCase().replace(" ", "")}.svg`}
                className="h-5 w-5 to-start-animation"
                alt={link.title}
              />
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
