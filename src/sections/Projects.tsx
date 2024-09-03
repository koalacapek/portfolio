import { motion } from "framer-motion";
import "./about.css";
import ProjectCard from "../components/ProjectCard";
import { useSectionInView } from "../hooks/useSectionInView";

import dues from "../assets/dues.png";

const Projects = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const projects = [
    {
      name: "Dues",
      desc: "NextJS Typescript Firebase",
      img: dues,
      link: "https://www.youtube.com/shorts/X9lBXrwAmBs",
      title: "Click me! (Deployed!)",
    },
    {
      name: "hobbify3",
      desc: "3",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAaVBMVEX///8AAADq6ur8/Pzz8/Ph4eHw8PD39/cmJibe3t7b29vt7e0fHx/W1tbl5eXBwcFISEjOzs5zc3MwMDA3NzdpaWmlpaWIiIibm5u4uLh8fHxBQUFXV1dgYGCrq6tSUlKSkpIXFxcMDAwDDeucAAASbElEQVR4nK1ch9qbOgyNGGHvvcf7P+SVTQCDbcbfe9qvzSAgZG3JfD6PYIcQ+tsbaHz+EKUFyCU/1wewxd+M8h89gZ9Cq2zvMigFx3wzMCPZCWrhTwjKGfo/06V00O48UpJERIAWQ6MIPqfIIZZ/BdUf6cJLDswle+hUwVEGHiU9RTS1muy7EiYpp69RgOsf3o6io4waOukpvmZjSb+sIZF/eYEKIGAJiA9vWcKky/X5JIkn/c7IoP0DXbp5FFzUPuH9IWGF/Cyhe7Fcegjja7q0DuqDSOFZhOKCWvlXwj7RPAlX4Qo9uEddsxoQyT5R3Rr/syvhmqWXhKECtN93dDnmWZk5wtQ+HpF2vYHs8wlSEEmTlkyXNkFNpYZOghiyE39wKQ+fGCEANPbHAyLCLoBIkoMJwC19Iasp8NdSeyKCBe75/v0BDmubQ5OTVUTlbRwDCYCBv0QByYDfxIHs6mpxpdM8YijOd1klcBCXAq2Hnw5oRcANPo2QY6jJvRLU+F0mW1Ev4VhwgchMTs7XG2Y4ioNBFsjRDHBd/AKXROCvK5jJkUq+rLoQl9bmBLWmisYQ2gGEoYAlmj9CHJEIRI341fKTzVHnKJG10A5+4VpxWVjmQZycEsAsFds8RxGolwlAWspCGPSixvpaySdIhesZP1fM/sAbD8W3tj+84CkoXkCkfoZZEKihFB7uxEO2FwIlsMA0+E9FUE1GzFXkx89CfY/OEyU77ZFSDyPFo7tfrteBeTLrvQshv5zoMh+afwtaZ33t1OCO6w2hDDMaNEKiL68ypCypDszQe1w5TnaiEFyesuoibjqg2BcducJoM5qGZBMTY+efQ2wVZL21rLRh9TXKerypoWoF5UKk3kLDWQcvhWdrmbrrFandjL1NspDrEObKR1VVo4Bu41EPQ2XieiZpEzZpQtzAj12qUhUD+SBeDtYG4CI0vN9Hsay3RZ2o7l2OegdjtIpQSRwRMV3AmjWyGGqVhYk7z5Nrpl1hf1Tfi0oifkhkG5f6eixSdvbb5TPrX65GDFdo8D/L2cOiWiyITziApKXJgbCQfhcFiMjzv1ZV1sQkozso8spjKVGGk5Ek0Y88AGewMTb+OVjHGsk1muy3Oo6v674SQL1JRk8CjBV2HhPSEV0Z6Q4nPpF5zo/UJJW4BRabsy5ZG+CPoUnlbbuOCptRQSZsL4mGgtm0RSQV6IqLkNonQhaZLv3fhlN0GZXEzu9nKCFdCMfgOtxuIGvrsvLkcQ5BdgqO0fI8yH6rxewTf3k+vWYH/WbhPt+OaKj6DTLW2ynKNVEEPhwDlU8A4/2vchiXY10NzcLVkZgWgGviCqdiy60Sq2IYihdUfV6ypGAsdzhSgexW+tE+kdVCi5V/qiEee9Qy/SshsM8wDhsKVppU3/aiKKr6coy7MKGaSeEyB2E0fGCZCqE0md8Ii6nb8cDUUNkozDArxrKKdJ481XOPdQO1H5IJGLjpkNVj2R9zlfFouVSBrz0DTTMRIxqLGL5Vjd3vOrOZhm1dnYk7pdrEN8CUtlldIq9t3feVr2Zwd+SZjc68RQ2/zcm/KRBzCCZzh4ZdlXE7NIk5n8sNqimIFx6gO+ghxjO3Z8G8TSOqGf8Ex9hTHMdGy36yTqopC5mvwZpnYmFldTSGsHnSmFJY34XSPEJM2Ne2dUeweqffMQVBfNfAbUaiEDPxDX+xZwoziQyuCEuPp/SIg5gR04TuvAnbLovrYsyjE6VHUhq4jfsVoo6R2RhEtDAILXJ0mZ6NsCz0kGc/o5qnap5fZ103hA1GP6a7Gwsu+C4ODjN8QphL7AQpeQXILLdpmhl1HtE04dDWZ5ZzGcrH+H4V39dt2yMGLVhQnTlWHbK2RxxDGRupiAUkzTjjbORNlzP76teOiK0fi7qOY7KQPe/RPTbheSJjzgQaemVyNXSX232gc9G+CO74hB5qfH3LDtCo/AIeHmZ/pM2mufB69vSBViagOR0QiVCLB9FIA0WVj3WXbiQkYZfVRVnmiJ78UyLvSL7rsL+zZmAIe2DHviE4frj8SFJ1XaFEZZ3t/qfJxr6KPM/yne/JWqgY+k/HvFY3WcKme8LQp3h6svyoh1AU7eGq+sE4/JYoTVuUofvyWwQHL+QvHuZ3Rph0/henq6Ier+uP3DsXfTQrQvdJcxEXfTvGhI/LW9NB8/zmQFh668SRTYUN5vI6grnebsVBj1lk4bJsdR5E+quS22eQE6YxKbYUAYQ2JBuVGPR0cdaSdNFc4pgu9xTtYbWBhSknzF7TzivYzRRshH30uvmJt9kMWdHfRPMIVVN83bKpr9CV73YHBoQHGUuYGmfP1wl5YCg/7oQhaUGf15iERPq9gKsernbcksSXhGUkSCzK3qYXzQ/xxEd3Ga18lIyQTsoqYyv8By4Djfm4WrMkTZg4Nm1L46O2x2zyYMe6R504GlBznyXXvDZ0mhSnQ31YbUMPxpZQW+bzcJBLzA73Nwnv1wSwTJ4wZ7gs+xm0ANytZYTzj6uaEH30Ih5Te/KvWmEMyB2eta7nizQ7AhLoF4Fc49UoOSVsGF3sFYxg7h5peQGC3KCRKo5DKp6jLMNbYMM5fGDl/aLao2qOtp3Z4/j+IWVGifxXJiTjjRX6upx0t8zpapnsW30RZ3GR/0IPFUAgUcV5MZZjR4DsLpbSYqbI98O8s9AfxC5ci9eQJflFJijJGXcYZs88tehZcRVv6MKlgrNWGEwyEs1nXaOnrtCodxUGv2WGQR7laQR7+WZHxU8LICvOlWkBck7AjulbzlXyPku1fIvjvRqDJpXyNhUwt4bue/5EOFhwpkFg18ed/VoniquRrmpXVbVy6UlGEFk8zYXx8EElPOyEyBTp87CrlyLqDHpn/Quo8gWu0J5GR8200gcuDvNMXl4/SrKbxZwvxJHs5EzASKJWdGy1yOTlMDEBXSG65An2JJwUqJiRCFPQGKkgPKvUNyVcyY8xygotg2z7gZXc51xew/yAwQjj+tImpfETVNHoTU74oEnM6Rf2PLUSGrYjXSkMIrocRt5F/UrMhnj/FtH0pZWIjz5tX9yXmlFgxUMs0Z5U2qnJ890zBZbNp6NVlXiQB7+YfvQYANcJBLGQQkkltmDjUi6iPZoEhKEctdFHmSSNJzR8MxVW/yaBIM5qFJ/DaLbEWxlEMuOJCKPFylaJpUFlsRQwLBk7FjghSM9g7wMHFaSCA7xEQJiCpqLBWFTklRbUlDL9qjZvBBM0UuO737QqshVU+PlzoyapFgnJZpkxIJ67wtuWZzZ6PEMsza2NvWXTc15uOUIUCAXECqhkxETgWnfKel3eNCCtxFLOzn0MT2skmi0oThjdcqzSXYwefkZcKUm9wekxZ8guShHO7idHblBnp/hsripIFlqV5kq6KxLDjfzndj5gzNRfxdm7vNupNCsM4GTe/D0I9gRhFHMgUd7yuJhGlSG9bn/ZfkFz9LuCejVEGB8nX1Dyd5Eu2dSPRxBiUtYUge4Q+MFIiolmexcIYYjyuwI6BnnwS6zW1urT+gTi3Wqi8bsMa9Qgbg7lzIZpfUuxSY/GZygsvmiV2tzTfd3ukciYvYdqvplUUu2gjEPk1JS0dR/YD7LDaBvlLMSmYj95MJPBhMR0SQX3KLXxkz4iLRqfi5tStDAuL4Lpfgy2IkvSDILejLme5v8CquSy2r4o6eIRpRCI+Bq5T+dungEDsXF5FcPwiMejZLys/ON0rwTVqpLV03lmLzHF0VVxaJP9I5w19/GuNZJFDKPwc60VR+1/Qg0ZVVynFWRGEkTi9IOWy+T2+R2idQ6iIC2+pwhl1hSTgK6vqiCKIo/AWqGz8BU5HI2Czhirqkok7UVb2IZZ7OOiUNK3+ge82ZZhSKRMS6Edx+KHekG8oK6ztsvqOMuybkVLMbQDRYh/KRqKlMI9bGC4RcAXOAkwjfHp0Mlv8ISCrIxhfPIwTZJ0iNTF+lM4Byj4l4Mdvph9pVGIqOIYSk2sRWKchrjK+KXeRtdxC3f4JCoqSWvwEYkVw2Isuhm6+1YQC8907w9iEItiVvRuvWKo3PyRtfZyExKXZZrK4uZCNbwjTFixUGPSfEGYpunuMCcy5jeOY5ZM+BLcI8xLvNRLIugpf7NGmRG1IgIVbth7301c0044adMklPj51+Kf2Vb/vIAMY5hpF7+kzBHHrIav61aH7NztqYIZXIPGYSAxrNs2GOnTaYZonWiokKpABGKnNWTBoy7NhmqbBj6jP002lBATk6GXlTcSjnC5XjRdDpGOML9S5fjnZs+IzjXRkvKW5MUjfpsJZt+95MpTY7LdPPXjBIq4FKJw3XFaSfpSb0V47Aqy40jUx9jgNzC+IIxs++FtkjquafCGimzccWjrAh2yP4umtc7Lf0T0bu8bspifFY/4rpeRImtJl4COF563TPxQwnxheTEGfdPu1/mygZrCyB3XQxORGJ6Ecf00C+MY0kSSp3TGy01JFSfIvXDoMiYVMJIrGCM3pLzCd68KtdXLTUmoL4cF+DbC634zmLsGY6LwwlpWF7tCSRngTZRB+iktq4KlrFBc/tp23YUQd1fLFc0XuxwF0A+arLTywKcvxzKvrioDETuOxeGSbAGCiRGN4PLUd8AFv5Cy6MHI8AG7BdJ8aZbyDPnlVpXmbaZfwLSsfgayJOUh7PQql6/e5oaYmtBxL1I/u6zn36O9SrotV7ydVA5t2SP+7f6+nfsHWVmE4jcO+QZaC4NOu9CvNJqHd1ljyF+asg+tYA0G/nNd97uHKis+UDzexsXAayD21s062pIffr+a9ijfYADzhQG2k9uuJw99gORXU6wv8v3ZNZO0GYY2y8g4LmYoZd5XwabLg0yMvh4ZQ53j53OOG2Uk5SA6ZWAUkdFCQEtyfzJKnZLUw5342eIVW/m23tTnYHe0fqt5D9Vb0qJm6U76g+vR/F/xFd/3dcsio9Teln9sI9UEPcXezhxXwiK2CeBjphSWdBIFCcze2soooYTZzTmCvcVeOOlXQ4bObTM9egrpOhiuBsAP2dzg58G95J8IW33avqnWcQ8hC15GUmqVQV9qKtG/EFbtzpY8sYTQo57no8hWvVdXsJeOopeYL62ZustYdZhhA7KNid/+5l+21Hh4y5iM3bzk9MfZ7X3OOkvSk/YNweNZcojfeE3SjvsQTk8vHZO9L8148LZRCMno8jVCR/DZNWHE8qvdW19b7RlyfQwD6C5u3tz/tpC9IIzWDOTPuZGg2AWLs/w9CDy3UbwKSMl0DpGu6p0EkArpxia+6lYKaDButjWcCWuWOo4ifciBGMyAmArcRthcwP+XhKG5WG49fBcv9nvI7LFPS1pQCSpURv3qChYSRqU44kfNLoCSzBhVTqBEc5zf8JVXskJY8nJDnI5LELl78i+I+ZWWL/ZGkL4xFxjBTosaV+A+/iHbMohMwX6QkZ8i5Gs514QN06/EhKtzP5K4EsMECwIa6LTJSfxHwUTgFZzWrKYlw/Lcq4EdFl9mKFQXT6MEx8qlms8vLfi3da1VkHExH+mNFjMzbzm7zYNBzc5CG/X09mlkWjf51ToBOV6WLleoBZj7EyVkPyGxYTrS1VNICPu2DKFms4d6tayMuoZTV3A69hEZhWxyowKzI+F+SktZ3fvcNUMRieD3tBwjP++t4xAN7H52T/pUKjKd+dunFhaXhSwJ6FPHss2Oo/8NL7JErXbZzB2lTdaEQIHN4iLwbc++eELTJWEV8Xww/t5bLaY0lvhUDjJ0ZsvXo0TyKWG0N9b9uZK0TAsylTyjxGSziLgF1aKRjNodHzkgz8FzqKO+aASPWHlMGBF8tWR2FNDmUVewMzdGMGZIVnd4OFUlHzhdN7NY2bvGDYM1GIkZvVcdOvWZpNmY930+dg19GEJ9HNPq599PJYRRopW3VdgN2/RxfdySENRt6m7Vi6StT5pFB4cvzrsGOcH0ynfv2DZ0aMilgpUsjTzHgqIKuLII6WdesmJ9xqAxPH9m1QH7jisVda55eBK0ZvO1++pWF9r9sWIZMMG+R6of9/N+Kpn4vJuh2oa/u5s7kCHaO6vqxylR9WrhCNwGI8BVTG6fkZL+kjU/FMzzP4F9LHV6BTUV0hX1ygwVtLhPXMwfYeLx9Afw52MApypkI+Vstrn3NbaiJ/1fr2piNtz6fuaU5HSUMEs2bX0LY+LztqBol43GZjiQ6ib+yej2TpiGuH+m/bQxbHjJnx7XSeGK5mqciDx3YLNjFGhu++BxeIyyWpZkBvfPztKVda6Nr+LbEbVlaMh0n9kIeQ/jdzfl2QD+B2HzGM7hBtcTAAAAAElFTkSuQmCC",
      link: "https://www.youtube.com/shorts/X9lBXrwAmBs",
      title: "Click me!",
    },
    {
      name: "Dues",
      desc: "NextJS Typescript Firebase",
      img: dues,
      link: "https://www.youtube.com/shorts/X9lBXrwAmBs",
      title: "Click me!",
    },
    {
      name: "Dues",
      desc: "NextJS Typescript Firebase",
      img: dues,
      link: "https://www.youtube.com/shorts/X9lBXrwAmBs",
      title: "Click me!",
    },
  ];

  const { ref } = useSectionInView("Projects");

  return (
    <section id="projects" ref={ref}>
      <motion.div
        className="flex h-full w-screen justify-center items-center"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="w-10/12 h-full">
          <div className="flex flex-col h-full items-center justify-center gap-y-5 mx-36 pt-10">
            <h1 className="pb-10 text-center font-bold text-4xl">
              My Projects
            </h1>
            <div className="w-full grid grid-cols-2 grid-rows-2 justify-items-center gap-y-20">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  img={project.img}
                  link={project.link}
                  desc={project.desc}
                  title={project.title}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
