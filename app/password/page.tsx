import { PasswordSetupForm } from "@/components/password";

import { Suspense } from "react";

export default function Password() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex items-center justify-center min-h-screen bg-[#004225]">
        <PasswordSetupForm />
      </div>
    </Suspense>
  );
}
