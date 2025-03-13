import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const MovieCard = ({
  imdb_code,
  title,
  language,
  runtime,
  rating,
  medium_cover_image,
  year,
}: Movie) => {
  return (
    <Link href={`/movies/${imdb_code}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: medium_cover_image
              ? medium_cover_image
              : "https://placeholder.co/600*400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-white text-xs font-bold uppercase">
            {rating === 0 ? "N/A" : rating}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300 font-medium mt-1">
            {year}
          </Text>
          <Text className="text-sx font-medium text-light-300 uppercase">
            {language}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
