import { Button } from "components/button";
import { TrashIcon } from "@heroicons/react/outline";

export const Bookmark = ({ title, normalPrice, salePrice, imageUrl, deleteBookmark }) => {

    return (
        <div className="grid grid-cols-2 mb-10">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img className="w-full" src={imageUrl} alt="" />
            </div> 
            <div className="ml-12">
                <div className="mt-4">
                    USD
                    <span className="text-decoration: line-through ml-1">{normalPrice}</span>
                    <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ml-3">{salePrice}</span>
                </div>
                <div className="mt-4">
                    <div className="flex items-center">
                        <p className="text-lg text-gray-900 sm:text-xl">{title}</p>
                    </div>
                </div>
                    <Button
                    type="button"
                    variant="outline"
                    className="mt-6 py-3"
                    onClick={deleteBookmark}
                    >
                        Remove from bookmarks
                        <TrashIcon className="h-5 w-5 ml-3" />
                    </Button>       
            </div>          
        </div>

    )
}