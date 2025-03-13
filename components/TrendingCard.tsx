import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constants/images";

const TrendingCard = ({
  movie: { movie_id, title, url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-2">
        <Image
          source={{ uri: url }}
          className="w-32 h-40 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-10 -left-3.5 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-7xl text-white">{index + 1}</Text>
            }
          >
            <Image source={images.rankingGradient} className="size-14" />
          </MaskedView>
        </View>
        <Text
          className="text-sm font-bold mt-2 text-light-200"
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
