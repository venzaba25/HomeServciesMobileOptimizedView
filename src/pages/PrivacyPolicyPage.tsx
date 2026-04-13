import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Privacy Policy</h1>
      </div>

      <div className="flex-1 px-6 pb-8">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-2 text-base font-bold text-foreground">1. Types of Data We Collect</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-bold text-foreground">2. Use of Your Personal Data</h2>
            <p>Magna etiam tempor orci eu lobortis elementum nibh. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Commodo elit at imperdiet dui. Nos ullam corper felis imperdiet proin fermentum leo vel orci. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-bold text-foreground">3. Disclosure of Your Personal Data</h2>
            <p>Consequat id porta nibh venenatis cras sed. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Nibh tellus molestie nunc non blandit massa. Quam pellentesque nec nam aliquam sem et tortor consequat id. Faucibus vitae aliquet nec ullamcorper sit amet risus. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
