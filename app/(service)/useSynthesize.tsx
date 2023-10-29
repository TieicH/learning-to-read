import { useMutation, useQuery } from '@tanstack/react-query';
import { apiEndpoints, cacheTree } from './constants';
import axios from 'axios';

export type SynthesizeProps = {
  query: string;
  queryId: string;
  language?: string;
  voice?: string;
  volumen?: number;
  speakingSpeed?: number;
  pitch?: number;
  encoding?: string;
  type: string;
  ssml?: boolean;
  languageCode?: string;
  name?: string;
};

export const useSynthesize = () => {
  return useMutation({
    mutationKey: [cacheTree.synthetize.name],
    mutationFn: (params: SynthesizeProps) => {
      return axios.post(apiEndpoints.apiSynthesize, {
        ...params
      });
    }
  });
};
