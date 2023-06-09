import _ from "lodash";
import React, { useState, Fragment } from "react";
import { ListRenderItemInfo, View, Text, TouchableOpacity, ListRenderItem } from "react-native";
import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Spinner } from "../../../../../components/Spinner/Spinner";
import { WHITE } from "../../../../../constants/color/colorpalette";
import { loadFavorites, deleteFavorite } from "../../../../../constants/HandleAsyncStorage/HandleAS";
import { IMovieIDInterface } from "../../../../../constants/Interfaces/IMovieByIDInterface";
import { IMovieIDTVInterface } from "../../../../../constants/Interfaces/IMovieByIDTVInterface";
import { ItmdbItem } from "../../../../../constants/Interfaces/IMovieInterface";
import { styles } from "./styles";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import { tmdbGetById, tmdbGetByIdTV } from "../../../../../constants/services/APICallsTMDB";
import { TVSeriesPopup } from "../../../../../components/MovieLayout/TVSeriesPopup/TVSeriesPopup";


export const FavoriteScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [favoriteMap, setFavoriteMap] = useState<Map<number, ItmdbItem>>(
    new Map<number, ItmdbItem>(),
  );
  let flatlistMap = new Map<number, ItmdbItem>();

  const [showDetails, setShowDetails] = useState(false);
  const [loadingID, setLoadingID] = useState(false);
  const [loadingTV, setLoadingTV] = useState(false);
  const [detailMovie, setDetailMovie] = useState<MapState>({
    selected: {} as IMovieIDInterface,
  });
  const [detailMovieTV, setDetailMovieTV] = useState<MapStateTV>({
    selected: {} as IMovieIDTVInterface,
  });

  const FetchFavoriteData = async () => {
    flatlistMap = await loadFavorites(flatlistMap);
    setFavoriteMap(flatlistMap);
    // console.log(flatlistMap);
    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      FetchFavoriteData();
    }, []),
  );

  const updateMap = (id: number, movieValues: ItmdbItem) => {
    setFavoriteMap(
      new Map<number, ItmdbItem>(favoriteMap.set(id, movieValues)),
    );
  };
  const closeRow = (rowMap: RowMap<ItmdbItem>, keyID: number) => {
    if (rowMap[keyID]) {
      rowMap[keyID].closeRow();
    }
  };

  const deleteMovie = async (id: number) => {
    flatlistMap = await deleteFavorite(id, flatlistMap);
    setFavoriteMap(flatlistMap);
  };

  const handleDeleteMovie = async (rowMap: RowMap<ItmdbItem>, keyID: number) => {
    closeRow(rowMap, keyID);
    let favoriteMovieValues = _.cloneDeep(favoriteMap.get(keyID));
    if (favoriteMovieValues !== undefined) {
      try {
        favoriteMovieValues.favorite = false;
        updateMap(keyID, favoriteMovieValues);
        deleteMovie(favoriteMovieValues.id);
      } catch (err) {
        err;
      }
    }
  };
  interface IDelete {
    onDelete: () => void;
    data: ListRenderItemInfo<ItmdbItem>;
    rowMap: RowMap<ItmdbItem>;
  }

  const HiddenItemWithActions = ({onDelete}: IDelete) => {
    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity onPress={onDelete} style={styles.deleteOpacity}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color={WHITE}
            size={40}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderHiddenItem = (
    data: ListRenderItemInfo<ItmdbItem>,
    rowMap: RowMap<ItmdbItem>,
  ) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onDelete={() => handleDeleteMovie(rowMap, data.item.id)}
      />
    );
  };
  const closeModal = () => {
    setShowDetails(false);
  };
  const openMovieDetails = async (movieID: number) => {
    setLoadingID(false);
    setLoadingTV(false);
    try {
      await tmdbGetById(movieID).then(async (result) => {
        if (result.success === false) {
          await tmdbGetByIdTV(movieID).then(async (result) => {
            await handleTVDetails(result);
            setLoadingTV(true);
          });
        } else {
          await handleMovieDetails(result);
          setLoadingID(true);
        }
      });
    } catch (err) {
      console.log('Error at MovieDetailOpen');
      throw err;
    }
  };

  const handleMovieDetails = async (result: IMovieIDInterface) => {
    setDetailMovie({selected: result});
    setShowDetails(true);
  };
  const handleTVDetails = async (result: IMovieIDTVInterface) => {
    setDetailMovieTV({selected: result});
    setShowDetails(true);
  };

  const TrendingList: ListRenderItem<ItmdbItem> = ({item}) => (
    <FavoriteItem openDetails={() => openMovieDetails(item.id)} item={item} />
  );

  return (
    <View style={styles.favoritesContainer}>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <SwipeListView
            useFlatList={true}
            data={Array.from(favoriteMap.values())}
            renderItem={TrendingList}
            keyExtractor={(movie, index) => `${movie.id}-${index}`}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={0}
            rightOpenValue={-100}
            closeOnScroll={true}
            disableRightSwipe={true}
            directionalDistanceChangeThreshold={20}
          />
          {/* {loadingID ? (
            <MoviePopup
              item={detailMovie.selected}
              onPress={closeModal}
              visible={showDetails}
            />
          ) : (
            <></>
          )} */}
          {loadingTV ? (
            <TVSeriesPopup
              item={detailMovieTV.selected}
              onPress={closeModal}
              visible={showDetails}
            />
          ) : (
            <></>
          )}
        </Fragment>
      )}
    </View>
  );
};
function useFocusEffect(arg0: () => void) {
  throw new Error("Function not implemented.");
}

