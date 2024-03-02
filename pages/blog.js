import { Products } from "@/comps/Products";
import { ProfileSection } from "@/comps/ProfileSection";
import { QrCode } from "@/comps/QrCode";

const Blog = () => {
    return (
        <main
            className="grid grid-cols-3 gap-4 max-xl:grid-cols-1 mt-8"
        >
            <div>
                <ProfileSection />
                <QrCode />
            </div>
            <div className="col-span-2">
                Blog
            </div>
        </main>
    )
}

export default Blog;