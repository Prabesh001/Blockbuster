import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovieDetails } from "@/services/api";
import { icons } from "@/constants/icons";

const MovieDetails = () => {
  const { id }: { id: string } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() => fetchMovieDetails(id));
  return (
    <View className="bg-primary flex-1 px-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View>
          <Image
            source={{ uri: `${movie?.large_cover_image}` }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-2xl">{movie?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm">{movie?.year}</Text>
            <Text className="text-2xl text-white">•</Text>
            <Text className="text-light-200 text-sm">{movie?.runtime}m</Text>
          </View>

          <View className="flex-row items-center bg-dark-200 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white">{movie?.rating || "N/A"}</Text>
          </View>

          <MovieInfo label="Overview" value={movie?.summary} />

          <MovieInfo
            label="Genres"
            value={
              movie?.genres?.map((g: string | any) => g).join(" • ") || "N/A"
            }
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={router.back}
        className="absolute bg-accent bottom-5 left-0 right-0 rounded-lg py-3.5 flex flex-row items-center justify-center z-50 mx-5"
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base"> Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const MovieInfo = ({ label, value }: any) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-100 font-bold text-sm mt-2">
      {value || "N/A"}
    </Text>
  </View>
);

export default MovieDetails;
