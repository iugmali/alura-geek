interface Props {
  title: string;
}
export default function MenuButton({title}:Props) {
  return (
    <button>
      {title}
    </button>
  );
}