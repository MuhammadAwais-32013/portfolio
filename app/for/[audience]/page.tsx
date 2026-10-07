import { notFound } from "next/navigation";
import { Metadata } from "next";
import HomePage from "@/app/page";

const VALID_AUDIENCES = ["recruiters", "professors", "admissions"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>;
}): Promise<Metadata> {
  const { audience } = await params;
  const lower = audience.toLowerCase();

  if (lower === "recruiters") {
    return {
      title: "For Engineering Recruiters & Tech Leads | Muhammad Awais",
      description:
        "Full-stack AI engineer portfolio focused on deployed products, YOLO edge models, RBAC systems, and verified performance metrics.",
    };
  } else if (lower === "professors") {
    return {
      title: "For Prospective Research Advisors & Professors | Muhammad Awais",
      description:
        "Academic research profile for Muhammad Awais. FYP in urban traffic computer vision, empirical dataset creation, and MS research fit.",
    };
  } else if (lower === "admissions") {
    return {
      title: "For Graduate Admissions & Scholarship Committees | Muhammad Awais",
      description:
        "Academic trajectory, NUML BS CS coursework, and MS AI / Cybersecurity scholarship roadmap (CSC, ANSO, Italy).",
    };
  }

  return {
    title: "Tailored Portfolio Lens | Muhammad Awais",
  };
}

export default async function AudienceLandingPage({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;
  const lower = audience.toLowerCase();

  if (!VALID_AUDIENCES.includes(lower)) {
    notFound();
  }

  return <HomePage />;
}
