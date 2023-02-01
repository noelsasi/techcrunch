import moment from "moment/moment";
import React from "react";

export default function PostCard({
  jetpack_featured_media_url,
  title,
  primary_category,
  link,
  parselyMeta,
}) {
  return (
    <a href={link}>
      <div className="hover:shadow-xl transition duration-300 ease-in-out max-w-sm bg-white border border-gray-200 overflow-hidden rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-48 object-cover hover:scale-110 transition duration-300 ease-in-out "
            src={jetpack_featured_media_url}
            alt="post-image"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 h-14 text-ellipsis overflow-hidden text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title.rendered}
            </h5>
          </a>
          <p className="mb-3  h-24 text-ellipsis overflow-hidden font-normal text-gray-700 dark:text-gray-400">
            {primary_category.description} {"..."}
          </p>

          <div className="mt-2">
            <p className="font-semibold">{parselyMeta["parsely-author"]}</p>
            <p>
              {moment(parselyMeta["parsely-pub-date"]).format(
                "MMMM Do YYYY, h:mm:ss a"
              )}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
