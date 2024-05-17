type Props = {
  title: string;
  icon?: string;
};

export default function Pill({ title, icon }: Props) {
  return (
    <div className="border border-teal text-teal text-sm font-medium h-8 rounded-full flex min-w-20 px-4">
      <span className="m-auto">{title}</span>
    </div>
  );
}
