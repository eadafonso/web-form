type Props = {
  title: string;
  subTitle: string;
};

export function HeaderLogin(props: Props) {
  const { title, subTitle } = props;
  return (
    <header>
      <div className="flex flex-row items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-gray-300 flex justify-center items-center">
          <span>I</span>
        </div>

        <strong className="ml-3">{title}</strong>
      </div>

      <p className="mt-4 font-100 text-xs mb-10 block">{subTitle}</p>
    </header>
  );
}
