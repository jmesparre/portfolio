import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ScrollProgress from "@/components/ui/scroll-progress";
import TypingAnimation from "@/components/ui/typing-animation";
import TextReveal from "@/components/ui/text-reveal";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">

    <ScrollProgress className="fixed top-0 left-0 w-full h-1.5 z-50" />
  
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8 mb-10 mt-10">
          <div className="gap-2 flex justify-between">
           
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-30 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>

            <div className="flex-col flex flex-1 space-y-1.5 pl-5">
              <TypingAnimation className="pb-4 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hola soy Juan!
              </TypingAnimation>
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY * 40}
                text={DATA.description}
              />
            </div>
            
          </div>
        </div>
      </section>

      <div className="z-10 flex min-h-64 items-center text-center justify-center rounded-lg ">
         <TextReveal text="Me gusta crear proyectos interactivos y interfaces de usarios." />
      </div>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <TypingAnimation startOnView className="pt-5 text-2xl font-bold tracking-tighter sm:text-4xl pb-6">
                  Mis proyectos 🎨
                </TypingAnimation>        
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trabajo en variedades de proyectos desde web sencillas a aplicaciones web complejas.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 px-6 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                 // dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      { /*  <section id="about">
        <div className="pb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 1}>
            <h2 className=" text-3xl font-bold mb-7 text-center">Mi experiencia</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="px-6 prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>
      </section>
       <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold pb-3">Empresas</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
        <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      <section id="skills">
        <div className="flex min-h-0 mt-20 flex-col gap-y-3 py-20">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <TypingAnimation startOnView className="pt-10 text-center text-2xl font-bold tracking-tighter sm:text-4xl pb-6">
          Mis habilidades 🏹
                </TypingAnimation>
           
          </BlurFade>
          <div className="px-10 mb-20 flex flex-wrap gap-1.5 justify-center cursor-context-menu">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge className="text-md" key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-16">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              { /*  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Experiencia</div> */ }
                 <TypingAnimation startOnView className="pt-10 text-center text-2xl font-bold tracking-tighter sm:text-4xl pb-6">
                  Empresas en las que trabaje 🏢
                </TypingAnimation>
            
                <p className="pb-20 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mi experiencia laborar en el rubro comienza como diseñador grafico donde trabaje 5 años, luego me dedique al desarrollo de front end por 4 años, y luego trabaje 7 años como diseñador industrial.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-10 ml-4 divide-y divide-dashed border-l px-8">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-20">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
       

              <TypingAnimation startOnView className="pt-10 text-center text-2xl font-bold tracking-tighter sm:text-4xl pb-4">
              Mandame un mensaje ✉
                </TypingAnimation>
             
              <p className="pb-10 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Para mas informacion {" "}
                <Link
                  href={" https://wa.me/5491132750873"}
                  target="blank"
                  className="text-blue-500 hover:underline"
                >
                  escribime a mi wsap
                </Link>{" "}
                o mandame un mail jmesparre gmail.com
              </p>
             
            </div>
        
          </BlurFade>
          
        </div>
      </section>
    </main>
  );
}
