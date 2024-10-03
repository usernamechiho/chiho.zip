import { ONE_WEEK } from "@/_constants/time";
import { LIGHT } from "@/_styles/colors";
import { SunMoon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ThemeButton() {
  const router = useRouter();

  const handleCookieChange = () => {
    const cookie = document.cookie;

    if (cookie.includes("dark")) {
      document.cookie = `theme=light; max-age=${ONE_WEEK}`;
      router.refresh();
      return;
    }

    document.cookie = `theme=dark; max-age=${ONE_WEEK}`;
    router.refresh();
  };

  return (
    <button>
      <SunMoon onClick={handleCookieChange} />
    </button>
  );
}
