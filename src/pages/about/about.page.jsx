export const AboutPage = () => {
  return (
    <div className="about">
      <div className="flex flex-col space-y-2 xl:pt-20">
        <p>
          <span className="font-bold">Привет!</span> Меня зовут Катя, я
          <span className="font-bold"> детский иллюстратор. </span>
          Специализируюсь на книжной и коммерческой иллюстрации. Создаю
          бренд-персонажей, портреты, стикеры, настольные игры, иллюстрации для
          соц.сетей и сайтов.
        </p>
        <p>
          Открыта к сотрудничеству с частными заказчиками, бизнесом и
          издательствами. Я буду рада обсудить ваши идеи и предложения!
        </p>
        <p>
          Вы можете написать мне
          <span className="font-bold"> на почту: </span>
          <a
            className="text-sky-300"
            href="mailto:lavrushkinskaya@gmail.com"
            target="_blank"
          >
            lavrushkinskaya@gmail.com
          </a>
          <br />
          Или <span className="font-bold">в телеграмм: </span>
          <a
            className="text-sky-300"
            href="https://t.me/lavrushhaa"
            target="_blank"
          >
            @lavrushhaa
          </a>
        </p>
      </div>
      <div className="rounded-3xl overflow-hidden max-h-[650px]">
        <img className="object-cover" alt="Katya" src="/katya3.jpg" />
      </div>
    </div>
  );
};
