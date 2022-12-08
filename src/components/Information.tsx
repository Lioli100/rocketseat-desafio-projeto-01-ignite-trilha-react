import { ClipboardText } from "phosphor-react";

interface InformationProps {
  title: string;
  subtitle: string;
}

export function Information({ title, subtitle }: InformationProps) {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-6 gap-4  w-[736px] border-t-2 border-solid border-gray-600 pb-3">
      <ClipboardText size={56} weight="thin" />
      <h1 className="text-gray-500 font-semibold justify-center">
        {title}
        <br />
        <p className="font-thin">{subtitle}</p>
      </h1>
    </div>
  );
}
