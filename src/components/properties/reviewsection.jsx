import React from 'react'

const Reviewsection = () => {
  return (
    <div className='w-full pt-5'>
        <div className="bg-gray-950 max-w-full min-h-screen ">
            <div className="px-10 flex flex-col gap-2 p-5 bg-gray-100 text-black">
                <h1 className="py-5 text-lg">Reviews</h1>
                <div className="flex bg-gray-600 bg-opacity-20 border border-gray-200 rounded-md">
                <input type="email" name="email" id="email" placeholder="Search Review" className="p-2 bg-transparent focus:outline-none" />
                </div>
                {/* Item Container */}
                <div className="flex flex-col gap-3 mt-14">
                <div className="flex flex-col gap-4 outline p-4">
                    {/* Profile and Rating */}
                    <div className="flex justify justify-between">
                    <div className="flex gap-2">
                        <div className="w-7 h-7 text-center rounded-full bg-red-500">J</div>
                        <span>Jess Hopkins</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                        5 STARS
                    </div>
                    </div>
                    <div className='w-full'>
                    Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                    </div>
                    <div className="flex justify-between">
                    <span>Feb 13, 2021</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4 outline p-4">
                <div className="flex justify justify-between">
                    <div className="flex gap-2">
                        <div className="w-7 h-7 text-center rounded-full bg-yellow-500">A</div>
                        <span>Alice Banks</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                        5 STARS
                    </div>
                    </div>
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde voluptates assumenda tempora numquam eaque praesentium quis dicta cum, pariatur amet mollitia fugit ab cupiditate officia dignissimos quidem optio. Corrupti.
                    Voluptatem quibusdam nesciunt exercitationem soluta vel labore laudantium veritatis necessitatibus ut porro. Deserunt asperiores quisquam animi quia, aut sequi, dicta eum numquam modi, sint est accusantium et sapiente? Vero, illo.
                    Repellendus laudantium, quibusdam quos facilis id optio asperiores pariatur eveniet, nihil perferendis est minima fugiat in deserunt sint tempora molestiae ut inventore! Deserunt sunt ipsam id quae debitis ea sit.
                    Maxime at beatae quas exercitationem obcaecati accusantium sit eveniet animi voluptatem, quaerat rerum a quis saepe! Quaerat aliquid facere eius exercitationem qui vero ducimus aperiam cupiditate magnam porro. Illum, delectus.
                    Minima illo animi reiciendis qui at tempore consequatur ipsum sed, et, dicta, accusamus velit perferendis voluptate libero facere voluptatibus nemo. Illo ipsum excepturi vel minus saepe rerum pariatur, est at!
                    </div>
                    <div className="flex justify-between">
                    <span>Feb 13, 2021</span>
                    </div>
                </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-lg">Add your review</h2>
                    <form>
                        <div className="mt-4">
                            <label htmlFor="rating" className="block">Rating</label>
                            <input type="number" id="rating" name="rating" min="1" max="5" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="review" className="block">Review</label>
                            <textarea id="review" name="review" rows="4" className="w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviewsection