
import { Navbar, NavbarCenter } from "@/components/ui/navbar";
import Navigation from "@/components/ui/navigation";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "@/components/logos/launch-ui";
import { IconPhFactory } from "@/components/logos/IconPhFactory";
import { Counter } from "@/components/counter";
import Container from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CheckboxDemo } from "@/components/ui/dark-mode-toggle-checkbox";
import SidePanelExample from "@/components/SidePanelExample";

export default function Home() {
  return (
    <>
      <Container className=" mt-4 h-[200vh]">
      {/* h-[90vh] */}
      <div className="block">
      <CheckboxDemo />
    </div>
        <Counter />
        <h2  >Home</h2>
        <p className="text-justify-centre">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          fermentum nunc. Nullam nec fermentum nunc. Nullam nec fermentum nunc.
          Nullam nec fermentum nunc. Nullam nec fermentum nunc. Nullam nec fermentum nunc.
          Nullam nec fermentum nunc. Nullam nec fermentum nunc. Nullam nec fermentum nunc.
        </p>

      </Container>
      <Section>
        bhbvhvbv
      </Section>
    </>
  );
}
