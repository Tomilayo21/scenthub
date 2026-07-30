"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  CheckCircle,
  XCircle,
  Upload,
  ImagePlus, X
} from "lucide-react";

import TiptapEditor from "@/components/TiptapEditor";
import ChipInput from "@/components/ChipInput";
import FileGallery from "./FileGallery";
import {
    saveDraftFile,
    saveDraftFiles,
    getDraftFile,
    getDraftFiles,
    clearFiles,
    saveUploadState,
    getUploadState,
    removeUploadState
} from "@/lib/draftDB";

import DraftStatus from "@/components/DraftStatus";

import DraftInfo from "@/components/DraftInfo";

import UploadRecoveryModal from "@/components/UploadRecoveryModal";

import DraftModal from "@/components/DraftModal";

export default function AddProject() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [uploading, setUploading] = useState(false);

  // -------------------------
  // Images
  // -------------------------

  const [coverImage, setCoverImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  // -------------------------
  // Basic Info
  // -------------------------

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Residential");

  const [projectType, setProjectType] =
    useState("New Construction");

  const [location, setLocation] = useState("");

  // ==========================
    // Project Details
    // ==========================

    const [client, setClient] = useState("");
    const [contractor, setContractor] = useState("");
    const [architect, setArchitect] = useState("");

    const [budget, setBudget] = useState("");
    const [currency, setCurrency] = useState("NGN");

    const [previewUrl, setPreviewUrl] = useState(null);

    const [statusValue, setStatusValue] = useState("Planning");
    const [progress, setProgress] = useState(0);

    const [duration, setDuration] = useState("");

    const [startDate, setStartDate] = useState("");
    const [completionDate, setCompletionDate] = useState("");


    // ==========================
    // Statistics
    // ==========================

    const [statistics, setStatistics] = useState({
        floors: "",
        bedrooms: "",
        bathrooms: "",
        parkingSpaces: "",
        area: "",
    });


    // ==========================
    // Construction Details
    // ==========================

    const [constructionDetails, setConstructionDetails] =
    useState({
        foundation: "",
        structure: "",
        roofing: "",
        finishing: "",
        electrical: "",
        plumbing: "",
    });

    // ==========================
    // MEDIA
    // ==========================

    const [beforeImages, setBeforeImages] = useState([]);
    const [afterImages, setAfterImages] = useState([]);
    const [floorPlans, setFloorPlans] = useState([]);

    const [virtualTourUrl, setVirtualTourUrl] = useState("");
    const [virtualTourProvider, setVirtualTourProvider] =
    useState("Matterport");


    // ==========================
    // EXTRA DETAILS
    // ==========================

    const [services, setServices] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [features, setFeatures] = useState([]);
    const [tags, setTags] = useState([]);

    const [serviceInput, setServiceInput] = useState("");
    const [materialInput, setMaterialInput] = useState("");
    const [featureInput, setFeatureInput] = useState("");
    const [tagInput, setTagInput] = useState("");

    // ==========================
    // TEAM
    // ==========================

    const [team, setTeam] = useState([]);

    const [teamRole, setTeamRole] = useState("");
    const [teamName, setTeamName] = useState("");
    const [teamCompany, setTeamCompany] = useState("");


    // ==========================
    // MILESTONES
    // ==========================

    const [milestones, setMilestones] = useState([]);

    const [milestoneTitle, setMilestoneTitle] = useState("");
    const [milestoneDescription, setMilestoneDescription] = useState("");
    const [milestoneDate, setMilestoneDate] = useState("");


    // ==========================
    // TESTIMONIAL
    // ==========================

    const [testimonialName, setTestimonialName] = useState("");
    const [testimonialCompany, setTestimonialCompany] = useState("");
    const [testimonialPosition, setTestimonialPosition] = useState("");
    const [testimonialMessage, setTestimonialMessage] = useState("");

    const [testimonialImage, setTestimonialImage] = useState(null);


    // ==========================
    // SEO
    // ==========================

    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");


    // ==========================
    // SETTINGS
    // ==========================

    const [featured, setFeatured] = useState(false);

    const [visible, setVisible] = useState(true);

    const [approvalStatus, setApprovalStatus] =
    useState("Published");

    const [videoFiles, setVideoFiles] = useState([]);

    const [documentFiles, setDocumentFiles] = useState([]);

    const [uploadStage,setUploadStage] = useState("idle");

    const [uploadProgress,setUploadProgress] = useState(0);

    const [cloudinaryProgress,setCloudinaryProgress] = useState(0);

    const [currentFile,setCurrentFile] = useState("");

    const [fileCount,setFileCount] = useState(0);

    const [totalSize,setTotalSize] = useState("0 MB");

    const [elapsedTime,setElapsedTime] = useState(0);

    const [totalTime,setTotalTime] = useState(null);

    const [uploadMessage,setUploadMessage] = useState("");

    const [displayProgress, setDisplayProgress] = useState(0);

    const [showUploadBox, setShowUploadBox] = useState(false);

    const [draftStatus,setDraftStatus] =
        useState("Saved");

    const [draftId,setDraftId] =
        useState(null);

    const [hasDraft,setHasDraft] = useState(false);

    const [showDraftModal,setShowDraftModal] = useState(false);

    const [draftInfo,setDraftInfo] = useState(null);

    const [uploadRecovery,setUploadRecovery] =
        useState(null);

    const [fileDraftStatus,setFileDraftStatus] =
        useState("Files saved");

    const [checkingDraft, setCheckingDraft] = useState(true);

    const saveFilesToIndexedDB = useCallback(async()=>{

        if (coverImage) {
            await saveDraftFiles(
                "coverImage",
                prepareFiles([coverImage])
            );
        }


        if(galleryImages.length){
            await saveDraftFiles(
                "galleryImages",
                prepareFiles(galleryImages)
            );
        }


        if(beforeImages.length){
            await saveDraftFiles(
                "beforeImages",
                prepareFiles(beforeImages)
            );
        }


        if(afterImages.length){
            await saveDraftFiles(
                "afterImages",
                prepareFiles(afterImages)
            );
        }


        if(floorPlans.length){
            await saveDraftFiles(
                "floorPlans",
                prepareFiles(floorPlans)
            );
        }


        if(videoFiles.length){
            await saveDraftFiles(
                "videos",
                videoFiles
            );
        }


        if(documentFiles.length){
            await saveDraftFiles(
                "documents",
                documentFiles
            );
        }


        if(testimonialImage){

            await saveDraftFile(
                "testimonialImage",
                {
                    name:testimonialImage.name,
                    size:testimonialImage.size,
                    type:testimonialImage.type,
                    file:testimonialImage
                }
            );

        }


    },[
        coverImage,
        galleryImages,
        beforeImages,
        afterImages,
        floorPlans,
        videoFiles,
        documentFiles,
        testimonialImage
    ]);

    useEffect(()=>{

        if(status !== "authenticated"){
            return;
        }


        setDraftStatus(
            "Unsaved changes"
        );


        clearTimeout(
            draftTimerRef.current
        );


        draftTimerRef.current =
        setTimeout(async()=>{


        const hasContent =
            title.trim() ||
            shortDescription.trim() ||
            description.trim() ||
            location.trim() ||

            client.trim() ||
            contractor.trim() ||
            architect.trim() ||

            budget ||
            startDate ||
            completionDate ||

            progress ||

            Object.values(statistics).some(Boolean) ||

            Object.values(constructionDetails).some(Boolean) ||

            services.length ||
            materials.length ||
            features.length ||
            tags.length ||

            team.length ||
            milestones.length ||

            virtualTourUrl ||
            virtualTourProvider ||

            testimonialName ||
            testimonialCompany ||
            testimonialPosition ||
            testimonialMessage ||
            testimonialImage ||

            metaTitle ||
            metaDescription ||

            coverImage ||
            galleryImages.length ||
            beforeImages.length ||
            afterImages.length ||
            floorPlans.length ||
            videoFiles.length ||
            documentFiles.length;



            if(!hasContent){

                setDraftStatus(
                    "Saved"
                );

                return;

            }

            if(skipAutosaveRef.current){

                skipAutosaveRef.current = false;

                return;

            }



            setDraftStatus(
                "Saving..."
            );


            await saveDraft();


            await saveFilesToIndexedDB();

            setDraftStatus(
                "Saved"
            );


        },5000);



        return ()=>{

            clearTimeout(
                draftTimerRef.current
            );

        };


    },[
    title,
    shortDescription,
    description,
    category,
    projectType,
    location,

    client,
    contractor,
    architect,

    budget,
    currency,

    startDate,
    completionDate,

    progress,
    statistics,
    constructionDetails,

    services,
    materials,
    features,
    tags,

    team,
    milestones,

    virtualTourUrl,
    virtualTourProvider,

    testimonialName,
    testimonialCompany,
    testimonialPosition,
    testimonialMessage,
    testimonialImage,

    metaTitle,
    metaDescription,

    featured,
    visible,
    approvalStatus,

    statusValue
    ]);

    useEffect(()=>{
        if(status !== "authenticated"){
            return;
        }

        async function loadDraft(){


        try{


        const res =
        await axios.get(
        "/api/projects/draft"
        );



        const draft =
        res.data;



        if(!draft || !draft._id){

        return;

        }

        setDraftInfo(draft);

        setHasDraft(true);

        setShowDraftModal(true);

        setDraftId(
            draft.draftId
        );



        setTitle(
        draft.title ?? ""
        );


        setShortDescription(
        draft.shortDescription ?? ""
        );



        setDescription(
        draft.description ?? ""
        );



        setCategory(
        draft.category ?? "Residential"
        );



        setProjectType(
        draft.projectType ?? "New Construction"
        );



        setLocation(
        draft.location ?? ""
        );



        // Project Details


        setClient(
        draft.client ?? ""
        );


        setContractor(
        draft.contractor ?? ""
        );


        setArchitect(
        draft.architect ?? ""
        );



        setBudget(
        draft.budget?.amount ?? ""
        );


        setCurrency(
        draft.budget?.currency ?? "NGN"
        );


        setStatusValue(
        draft.status ?? "Planning"
        );


        setProgress(
        draft.progress ?? 0
        );


        setDuration(
        draft.duration ?? ""
        );



        setStartDate(
        draft.startDate
        ?
        draft.startDate.substring(0,10)
        :
        ""
        );



        setCompletionDate(
        draft.completionDate
        ?
        draft.completionDate.substring(0,10)
        :
        ""
        );





        // Statistics


        setStatistics({
            floors: draft.statistics?.floors ?? "",
            bedrooms: draft.statistics?.bedrooms ?? "",
            bathrooms: draft.statistics?.bathrooms ?? "",
            parkingSpaces: draft.statistics?.parkingSpaces ?? "",
            area: draft.statistics?.area ?? ""
        });





        // Construction


        setConstructionDetails({
            foundation: draft.constructionDetails?.foundation ?? "",
            structure: draft.constructionDetails?.structure ?? "",
            roofing: draft.constructionDetails?.roofing ?? "",
            finishing: draft.constructionDetails?.finishing ?? "",
            electrical: draft.constructionDetails?.electrical ?? "",
            plumbing: draft.constructionDetails?.plumbing ?? ""
        });



        // Arrays

        setServices(
        Array.isArray(draft.services)
        ? draft.services
        : []
        );


        setMaterials(
        Array.isArray(draft.materials)
        ? draft.materials
        : []
        );


        setFeatures(
        Array.isArray(draft.features)
        ? draft.features
        : []
        );


        setTags(
        Array.isArray(draft.tags)
        ? draft.tags
        : []
        );


        setTeam(
        Array.isArray(draft.team)
        ? draft.team
        : []
        );


        setMilestones(
        Array.isArray(draft.milestones)
        ? draft.milestones
        : []
        );



        // Testimonial


        setTestimonialName(
        draft.testimonial?.name ?? ""
        );


        setTestimonialCompany(
        draft.testimonial?.company ?? ""
        );


        setTestimonialPosition(
        draft.testimonial?.position ?? ""
        );


        setTestimonialMessage(
        draft.testimonial?.message ?? ""
        );






        // SEO


        setMetaTitle(
        draft.metaTitle ?? ""
        );



        setMetaDescription(
        draft.metaDescription ?? ""
        );






        // Settings


        setFeatured(
        draft.featured ?? false
        );



        setVisible(
        draft.visible ?? true
        );



        setApprovalStatus(
        draft.approvalStatus ?? "Draft"
        );


        setVirtualTourUrl(
            draft.virtualTour?.url ?? ""
        );


        setVirtualTourProvider(
            draft.virtualTour?.provider ?? "Matterport"
        );




        console.log(
        "Draft restored:",
        draft
        );



        }
        catch(error){

        console.log(
        "Draft loading failed",
        error
        );

        }


        }



        loadDraft();


    },[status]);


    useEffect(() => {

        async function restoreFiles() {

            try {

                const cover = await getDraftFile(
                    "coverImage"
                );

                if (cover) {

                    setCoverImage(
                        cover.file || cover
                    );

                }



                const gallery = await getDraftFiles(
                    "galleryImages"
                );

                if (gallery?.length) {

                    setGalleryImages(
                        gallery.map(item => item.file)
                    );

                }



                const before = await getDraftFiles(
                    "beforeImages"
                );

                if (before?.length) {

                    setBeforeImages(
                        before.map(item => item.file)
                    );

                }



                const after = await getDraftFiles(
                    "afterImages"
                );

                if (after?.length) {

                    setAfterImages(
                        after.map(item => item.file)
                    );

                }



                const floors = await getDraftFiles(
                    "floorPlans"
                );

                if (floors?.length) {

                    setFloorPlans(
                        floors.map(item => item.file)
                    );

                }



                const testimonial = await getDraftFile(
                    "testimonialImage"
                );

                if(testimonial){

                    setTestimonialImage(
                        testimonial.file || testimonial
                    );

                }



                const videos = await getDraftFiles(
                    "videos"
                );

                if (videos?.length) {

                    setVideoFiles(
                        videos
                    );

                }



                const documents = await getDraftFiles(
                    "documents"
                );

                if (documents?.length) {

                    setDocumentFiles(
                        documents
                    );

                }


            } catch(error) {

                console.log(
                    "Draft file restore failed",
                    error
                );

            }

        }



        restoreFiles();


    }, []);
    
    useEffect(()=>{

        const savedDraftId =
        localStorage.getItem(
        "projectDraftId"
        );


        if(savedDraftId){

        draftIdRef.current = savedDraftId;


        setDraftId(savedDraftId);

        }


    },[]);



    useEffect(()=>{


        async function checkUpload(){


        const state =
        await getUploadState();



        if(
        state &&
        state.status==="uploading"
        ){

        setUploadRecovery(state);

        }


        }



        checkUpload();


    },[]);

    useEffect(()=>{


        if(status !== "authenticated"){
        return;
        }


        cacheFiles();


        },[

        coverImage,

        galleryImages,

        beforeImages,

        afterImages,

        floorPlans,

        videoFiles,

        documentFiles,

        status

    ]);
        
    const timerRef = useRef(null);

    const startTimeRef = useRef(null);

    const targetProgressRef = useRef(0);

    const progressAnimationRef = useRef(null);

    const draftTimerRef =
        useRef(null);
        

    const draftIdRef = useRef(null);

    const skipAutosaveRef = useRef(false);
    

    const formatTime = (seconds) => {

        const minutes = Math.floor(seconds / 60);

        const remainingSeconds = seconds % 60;


        if(minutes > 0){

            return `${minutes} min, ${remainingSeconds} seconds`;

        }


        return `${remainingSeconds} seconds`;

    };
  // -------------------------
  // Auth
  // -------------------------

  useEffect(() => {
    if (status === "authenticated") {
      if (session.user.role !== "admin") {
        router.replace("/");
      }
    }

    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [status, session, router]);


    useEffect(() => {

        if (!coverImage) {
            setPreviewUrl(null);
            return;
        }

        const file =
            coverImage instanceof File
                ? coverImage
                : coverImage.file instanceof File
                ? coverImage.file
                : Array.isArray(coverImage) &&
                coverImage[0]?.file instanceof File
                ? coverImage[0].file
                : null;

        if (!file) {
            console.log("Invalid coverImage:", coverImage);
            setPreviewUrl(null);
            return;
        }

        const url = URL.createObjectURL(file);

        setPreviewUrl(url);

        return () => URL.revokeObjectURL(url);

    }, [coverImage]);



    const saveDraft = useCallback(async()=>{

        try{

            const response = await axios.post(
                "/api/projects/draft",
                {
                    draftId: draftIdRef.current,

                    title,
                    shortDescription,
                    description,
                    category,
                    projectType,
                    location,

                    client,
                    contractor,
                    architect,

                    budget:{
                        amount:Number(budget),
                        currency
                    },

                    status:statusValue,

                    progress,

                    duration,

                    startDate,
                    completionDate,

                    statistics,

                    constructionDetails,

                    services,
                    materials,
                    features,
                    tags,

                    virtualTour:{
                        url: virtualTourUrl,
                        provider: virtualTourProvider
                    },

                    team,

                    milestones,

                    testimonial:{
                        name:testimonialName,
                        company:testimonialCompany,
                        position:testimonialPosition,
                        message:testimonialMessage,

                        image:null
                    },

                    metaTitle,
                    metaDescription,

                    featured,
                    visible,

                    approvalStatus,

                    publicationStatus:"draft"
                }
            );


            if(response.data.draft?.draftId){

                draftIdRef.current =
                    response.data.draft.draftId;


                setDraftId(
                    response.data.draft.draftId
                );


                localStorage.setItem(
                    "projectDraftId",
                    response.data.draft.draftId
                );

            }


        }catch(error){

            console.log(error);

        }


    },[
        draftId,

        title,
        shortDescription,
        description,
        category,
        projectType,
        location,

        client,
        contractor,
        architect,

        budget,
        currency,

        statusValue,
        progress,

        duration,

        startDate,
        completionDate,

        statistics,

        constructionDetails,

        services,
        materials,
        features,
        tags,

        virtualTourUrl,
        virtualTourProvider,

        team,

        milestones,

        testimonialName,
        testimonialCompany,
        testimonialPosition,
        testimonialMessage,
        testimonialImage,

        metaTitle,
        metaDescription,

        featured,
        visible,

        approvalStatus
    ]);

    const cacheFiles = async()=>{

        try{

            setFileDraftStatus(
                "Saving files..."
            );


            await saveDraftFiles(
                "coverImage",
                prepareFiles(
                    coverImage ? [coverImage] : []
                )
            );


            await saveDraftFiles(
                "galleryImages",
                prepareFiles(galleryImages)
            );


            await saveDraftFiles(
                "beforeImages",
                prepareFiles(beforeImages)
            );


            await saveDraftFiles(
                "afterImages",
                prepareFiles(afterImages)
            );


            await saveDraftFiles(
                "floorPlans",
                prepareFiles(floorPlans)
            );


            await saveDraftFiles(
                "videos",
                videoFiles
            );


            await saveDraftFiles(
                "documents",
                documentFiles
            );


            if(testimonialImage){

                await saveDraftFile(
                    "testimonialImage",
                    {
                        name: testimonialImage.name,
                        size: testimonialImage.size,
                        type: testimonialImage.type,
                        file: testimonialImage
                    }
                );

            }


            setFileDraftStatus(
                "Files saved"
            );


        }
        catch(error){

            console.log(
                "IndexedDB file cache error:",
                error
            );


            setFileDraftStatus(
                "File save failed"
            );

        }

    };

    const restoreDraft = (draft)=>{


        setDraftId(
        draft.draftId
        );



        setTitle(
        draft.title || ""
        );


        setShortDescription(
        draft.shortDescription || ""
        );


        setDescription(
        draft.description || ""
        );


        setCategory(
        draft.category || "Residential"
        );


        setProjectType(
        draft.projectType || "New Construction"
        );


        setLocation(
        draft.location || ""
        );


        setClient(
        draft.client || ""
        );


        setContractor(
        draft.contractor || ""
        );


        setArchitect(
        draft.architect || ""
        );



        setBudget(
        draft.budget?.amount || ""
        );



        setCurrency(
        draft.budget?.currency || "NGN"
        );



        setStatusValue(
        draft.status || "Planning"
        );



        setProgress(
        draft.progress || 0
        );



        setDuration(
        draft.duration || ""
        );



        setStartDate(
        draft.startDate
        ?
        draft.startDate.substring(0,10)
        :
        ""
        );



        setCompletionDate(
        draft.completionDate
        ?
        draft.completionDate.substring(0,10)
        :
        ""
        );





        // Statistics


        setStatistics(
        draft.statistics ||
        {
        floors:"",
        bedrooms:"",
        bathrooms:"",
        parkingSpaces:"",
        area:""
        }
        );





        // Construction


        setConstructionDetails(
        draft.constructionDetails ||
        {
        foundation:"",
        structure:"",
        roofing:"",
        finishing:"",
        electrical:"",
        plumbing:""
        }
        );






        // Arrays


        setServices(
        draft.services || []
        );



        setMaterials(
        draft.materials || []
        );



        setFeatures(
        draft.features || []
        );



        setTags(
        draft.tags || []
        );






        // Team


        setTeam(
        draft.team || []
        );




        // Milestones


        setMilestones(
        draft.milestones || []
        );






        // Testimonial


        setTestimonialName(
        draft.testimonial?.name || ""
        );


        setTestimonialCompany(
        draft.testimonial?.company || ""
        );



        setTestimonialPosition(
        draft.testimonial?.position || ""
        );



        setTestimonialMessage(
        draft.testimonial?.message || ""
        );






        // SEO


        setMetaTitle(
        draft.metaTitle || ""
        );



        setMetaDescription(
        draft.metaDescription || ""
        );






        // Settings


        setFeatured(
        draft.featured || false
        );



        setVisible(
        draft.visible ?? true
        );



        setApprovalStatus(
        draft.approvalStatus || "Draft"
        );

    };

    const continueDraft = async()=>{


    restoreDraft(
    draftInfo
    );


    setShowDraftModal(false);



    };

    const resetForm = () => {

        // -------------------------
        // Basic Information
        // -------------------------
        setTitle("");
        setShortDescription("");
        setDescription("");
        setCategory("Residential");
        setProjectType("New Construction");
        setLocation("");

        // -------------------------
        // Project Details
        // -------------------------
        setClient("");
        setContractor("");
        setArchitect("");

        setBudget("");
        setCurrency("NGN");

        setStatusValue("Planning");
        setProgress(0);

        setDuration("");
        setStartDate("");
        setCompletionDate("");

        // -------------------------
        // Statistics
        // -------------------------
        setStatistics({
            floors: "",
            bedrooms: "",
            bathrooms: "",
            parkingSpaces: "",
            area: "",
        });

        // -------------------------
        // Construction
        // -------------------------
        setConstructionDetails({
            foundation: "",
            structure: "",
            roofing: "",
            finishing: "",
            electrical: "",
            plumbing: "",
        });

        // -------------------------
        // Media
        // -------------------------
        setCoverImage(null);
        setGalleryImages([]);
        setBeforeImages([]);
        setAfterImages([]);
        setFloorPlans([]);

        setVideoFiles([]);
        setDocumentFiles([]);

        setPreviewUrl(null);

        // -------------------------
        // Virtual Tour
        // -------------------------
        setVirtualTourUrl("");
        setVirtualTourProvider("Matterport");

        // -------------------------
        // Attributes
        // -------------------------
        setServices([]);
        setMaterials([]);
        setFeatures([]);
        setTags([]);

        // -------------------------
        // Team
        // -------------------------
        setTeam([]);
        setTeamRole("");
        setTeamName("");
        setTeamCompany("");

        // -------------------------
        // Milestones
        // -------------------------
        setMilestones([]);
        setMilestoneTitle("");
        setMilestoneDescription("");
        setMilestoneDate("");

        // -------------------------
        // Testimonial
        // -------------------------
        setTestimonialName("");
        setTestimonialCompany("");
        setTestimonialPosition("");
        setTestimonialMessage("");
        setTestimonialImage(null);

        // -------------------------
        // SEO
        // -------------------------
        setMetaTitle("");
        setMetaDescription("");

        // -------------------------
        // Settings
        // -------------------------
        setFeatured(false);
        setVisible(true);
        setApprovalStatus("Published");

        // -------------------------
        // Draft
        // -------------------------
        setDraftId(null);
        setDraftInfo(null);
        setHasDraft(false);

        setDraftStatus("Saved");
        setFileDraftStatus("Files saved");

        // -------------------------
        // Upload UI
        // -------------------------
        setUploading(false);

        setShowUploadBox(false);

        setUploadStage("idle");

        setUploadProgress(0);

        setCloudinaryProgress(0);

        setCurrentFile("");

        setFileCount(0);

        setTotalSize("0 MB");

        setElapsedTime(0);

        setTotalTime(null);

        setUploadMessage("");

        setDisplayProgress(0);

        setUploadRecovery(null);

    };

    const startNewProject = async()=>{

        try{

        await axios.delete(
        "/api/projects/draft/delete"
        );


        await clearFiles();


        localStorage.removeItem(
        "projectDraftId"
        );

        skipAutosaveRef.current = true;

        resetForm();


        setDraftId(null);


        setShowDraftModal(false);


        }
        catch(error){

        console.error(
        "Failed to start new project",
        error
        );

        }

    };

  if (status === "loading") {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  // -------------------------
  // Submit
  // -------------------------


    const animateProgress = () => {

        setUploadProgress(prev => {

            const target = targetProgressRef.current;

            if (Math.abs(target - prev) < 0.2) {
                return target;
            }

            return prev + (target - prev) * 0.08;

        });

        progressAnimationRef.current =
            requestAnimationFrame(animateProgress);

    };

    const deleteDraft = async()=>{


        try{


        await axios.delete(
        "/api/projects/draft/delete"
        );


        }
        catch(error){

        console.log(
        "Draft cleanup failed",
        error
        );


        }


    };

    const prepareFiles = (files)=>{


        return files.map(file=>({

        name:file.name,

        size:file.size,

        type:file.type,

        file


        }));


    };

    let daysOld = 0;

    if (draftInfo?.lastSavedAt) {
        daysOld = Math.floor(
            (
                Date.now() -
                new Date(draftInfo.lastSavedAt)
            ) /
            (1000 * 60 * 60 * 24)
        );
    }


  async function handleSubmit(e) {
    e.preventDefault();

    if (!coverImage) {
      toast.error("Cover image is required");
      return;
    }

    try {
      setUploading(true);
      await saveDraft();

      setShowUploadBox(true);

      await saveUploadState({

        draftId,

        status:"uploading",

        startedAt:new Date(),

        progress:0

        });

        const allFiles = [
            coverImage,
            ...galleryImages,
            ...beforeImages,
            ...afterImages,
            ...floorPlans,

            ...videoFiles.map(video => video.file),

            ...documentFiles.map(document => document.file),

            testimonialImage
        ].filter(Boolean);


        const sizeBytes = allFiles.reduce(
            (total,file)=>total + file.size,
            0
        );


        setFileCount(allFiles.length);


        setTotalSize(
            (sizeBytes / 1024 / 1024).toFixed(2)
            + " MB"
        );




      setUploadProgress(0);
        setElapsedTime(0);
        setTotalTime(null);
        setUploadMessage("Preparing upload...");

        startTimeRef.current = Date.now();

        timerRef.current=setInterval(()=>{

            const seconds=Math.floor(
            (Date.now()-startTimeRef.current)/1000
            );


            setElapsedTime(seconds);


            if(seconds > 30){

            setUploadMessage(
            "Slow network detected. Please check your connection..."
            );

            }else{

            setUploadMessage(
            "Uploading files..."
            );

            }


        },1000);

      const formData = new FormData();

      formData.append("title", title);
      formData.append(
        "shortDescription",
        shortDescription
      );

      formData.append(
        "description",
        description
      );

      formData.append(
        "category",
        category
      );

      formData.append(
        "projectType",
        projectType
      );

      formData.append("client", client);
        formData.append("contractor", contractor);
        formData.append("architect", architect);

        formData.append("budget", budget);
        formData.append("currency", currency);

        formData.append("status", statusValue);
        formData.append("progress", progress);

        formData.append("duration", duration);

        formData.append("startDate", startDate);
        formData.append("completionDate", completionDate);

        formData.append(
        "statistics",
        JSON.stringify(statistics)
        );

        formData.append(
        "constructionDetails",
        JSON.stringify(constructionDetails)
        );


        // Arrays
        formData.append(
        "services",
        JSON.stringify(services)
        );

        formData.append(
        "materials",
        JSON.stringify(materials)
        );

        formData.append(
        "features",
        JSON.stringify(features)
        );

        formData.append(
        "tags",
        JSON.stringify(tags)
        );

        // Virtual Tour
        formData.append(
        "virtualTourUrl",
        virtualTourUrl
        );

        formData.append(
        "virtualTourProvider",
        virtualTourProvider
        );

        // Upload files
        // Upload files

        beforeImages.forEach(file=>{
        formData.append(
            "beforeImages",
            file
        );
        });


        afterImages.forEach(file=>{
        formData.append(
            "afterImages",
            file
        );
        });


        floorPlans.forEach(file=>{
        formData.append(
            "floorPlans",
            file
        );
        });


        // Videos

        videoFiles.forEach(video=>{

            formData.append(
                "videos",
                video.file
            );

            formData.append(
                "videoTitles",
                video.title
            );

        });


        // Documents

        documentFiles.forEach(document=>{

            formData.append(
                "documents",
                document.file
            );

            formData.append(
                "documentTitles",
                document.title
            );

        });

        // Team

        formData.append(
        "team",
        JSON.stringify(team)
        );


        // Milestones

        formData.append(
        "milestones",
        JSON.stringify(milestones)
        );


        // Testimonial

        formData.append(
        "testimonialName",
        testimonialName
        );

        formData.append(
        "testimonialCompany",
        testimonialCompany
        );

        formData.append(
        "testimonialPosition",
        testimonialPosition
        );

        formData.append(
        "testimonialMessage",
        testimonialMessage
        );


        if(testimonialImage){

        formData.append(
            "testimonialImage",
            testimonialImage
        );

        }


        // SEO

        formData.append(
        "metaTitle",
        metaTitle
        );


        formData.append(
        "metaDescription",
        metaDescription
        );


        // Display

        formData.append(
        "featured",
        featured
        );


        formData.append(
        "visible",
        visible
        );


        formData.append(
        "approvalStatus",
        approvalStatus
        );

      formData.append(
        "location",
        location
      );

      formData.append(
        "coverImage",
        coverImage
      );

      galleryImages.forEach((file) => {
        formData.append("images", file);
      });

      

        setUploadStage("browser");

        targetProgressRef.current = 1;

        progressAnimationRef.current =
        requestAnimationFrame(animateProgress);

        const response = await axios.post(
            "/api/projects/add",
                formData,
                {

                onUploadProgress:async(event)=>{


                const percent =
                Math.round(
                (event.loaded * 70) /
                event.total
                );



                targetProgressRef.current =
                percent;



                await saveUploadState({

                draftId,

                status:"uploading",

                progress:percent,

                updatedAt:new Date()

                });


                }

            }

        );

        cancelAnimationFrame(
            progressAnimationRef.current
        );


        setUploadStage("database");

        setUploadProgress(85);

        setUploadMessage("Saving project data...");

        // If there is any server-side work left, do it here...

        setUploadProgress(100);

        setUploadStage("completed");

        await removeUploadState();


        clearInterval(timerRef.current);


        const finished =
        Math.floor(
        (Date.now()-startTimeRef.current)/1000
        );


        setTotalTime(finished);


        setUploadMessage(
        `Completed in ${finished}s`
        );
        clearInterval(timerRef.current);

        const totalSeconds = Math.floor(
            (Date.now() - startTimeRef.current) / 1000
        );

        setTotalTime(totalSeconds);

        setUploadMessage(
            `Upload completed in ${formatTime(totalSeconds)}`
        );

      toast.custom(() => (
        <div className="bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
          <CheckCircle
            className="text-green-600"
            size={22}
          />

          <p>
            Project created successfully.
          </p>
        </div>
      ));

      await deleteDraft();
      await clearFiles();

      localStorage.removeItem(
        "projectDraftId"
      );

      setTimeout(()=>{

        setShowUploadBox(false);

      },10000);

      setTitle("");
      setShortDescription("");
      setDescription("");
      setCategory("Residential");
      setProjectType("New Construction");
      setLocation("");

      setCoverImage(null);
      setGalleryImages([]);
      setBeforeImages([]);

      setAfterImages([]);

      setFloorPlans([]);

      setVideoFiles([]);

      setDocumentFiles([]);
      localStorage.removeItem(
            "projectDraft"
        );

        await clearFiles();
        
    } catch (error) {
      toast.custom(() => (
        <div className="bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
          <XCircle
            className="text-red-600"
            size={22}
          />

          <p>
            {error.response?.data?.message ||
              "Upload failed"}
          </p>
        </div>
      ));
      setTimeout(() => {

            setShowUploadBox(false);

        }, 10000);
    } finally {

        clearInterval(timerRef.current);


        cancelAnimationFrame(
            progressAnimationRef.current
        );


        setUploading(false);

    }
  }


  return (
    <div className="bg-gray-50 min-h-screen">

        {
            !checkingDraft && (

            <DraftModal
                showDraftModal={showDraftModal}
                continueDraft={continueDraft}
                startNewProject={startNewProject}
            />

            )
        }
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto py-10 px-6 space-y-8"
      >

        {/* Heading */}
        <div className="py-16 mb-4">

            <h1 className="text-3xl font-semibold">
                Add New Project
            </h1>


            <p className="text-gray-500 mt-2">
                Upload a completed or ongoing project.
            </p>



            <DraftInfo
                draftInfo={draftInfo}
                daysOld={daysOld}
            />


            <DraftStatus
                draftStatus={draftStatus}
                fileDraftStatus={fileDraftStatus}
            />

        </div>



        <DraftModal
            showDraftModal={showDraftModal}
            continueDraft={continueDraft}
            startNewProject={startNewProject}
        />


        <UploadRecoveryModal
            uploadRecovery={uploadRecovery}
            setUploadRecovery={setUploadRecovery}
        />
                

        {/* Basic Information */}
        <div className="bg-white mb-8 rounded-sm shadow-sm border p-6 space-y-6">

          <h2 className="text-lg font-semibold">

            Basic Information

          </h2>

          <div>

            <label className="font-medium">

              Project Title <span className="text-norms">*</span>

            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

          <div>

            <label className="font-medium">

              Short Description <span className="text-norms">*</span>

            </label>

            <textarea
              rows={3}
              value={shortDescription}
              onChange={(e) =>
                setShortDescription(
                  e.target.value
                )
              }
              className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

          <div>

            <label className="font-medium">

              Full Description <span className="text-norms">*</span>

            </label>

            <div className="mt-2">

              <TiptapEditor
                description={description}
                setDescription={
                  setDescription
                }
              />

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div>

              <label>

                Category <span className="text-norms">*</span>

              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="mt-2 w-full border rounded-lg px-4 py-3"
              >

                <option>
                  Residential
                </option>

                <option>
                  Commercial
                </option>

                <option>
                  Industrial
                </option>

                <option>
                  Renovation
                </option>

                <option>
                  Infrastructure
                </option>

                <option>
                  Interior Design
                </option>

              </select>

            </div>

            <div>

              <label>

                Project Type <span className="text-norms">*</span>

              </label>

              <select
                value={projectType}
                onChange={(e) =>
                  setProjectType(
                    e.target.value
                  )
                }
                className="mt-2 w-full border rounded-lg px-4 py-3"
              >

                <option>
                  New Construction
                </option>

                <option>
                  Renovation
                </option>

                <option>
                  Extension
                </option>

                <option>
                  Interior Fit-out
                </option>

                <option>
                  Maintenance
                </option>

                <option>
                  Restoration
                </option>

              </select>

            </div>

            <div>

              <label>

                Location <span className="text-norms">*</span>

              </label>

              <input
                type="text"
                value={location}
                onChange={(e) =>
                  setLocation(
                    e.target.value
                  )
                }
                className="mt-2 w-full border rounded-lg px-4 py-3"
                placeholder="Lekki, Lagos"
              />

            </div>

          </div>

        </div>

        {/* Project Media & Gallery Section */}
        <div className="space-y-6">


            {/* Existing Image Galleries */}
            <div className="bg-white mb-8 rounded-sm border shadow-sm p-6">

                <h2 className="text-xl font-semibold mb-6">
                    Project Images
                </h2>


                <div className="space-y-6">

                    <FileGallery
                        title="Before Images"
                        files={beforeImages}
                        setFiles={setBeforeImages}
                    />


                    <FileGallery
                        title="After Images"
                        files={afterImages}
                        setFiles={setAfterImages}
                    />


                    <FileGallery
                        title="Floor Plans"
                        files={floorPlans}
                        setFiles={setFloorPlans}
                    />

                </div>


            </div>


            {/* Cover Image */}
            <div className="bg-white rounded-sm shadow-sm border p-6">

                <h2 className="text-xl font-semibold mb-5">
                    Cover Image <span className="text-norms">*</span>
                </h2>

                            {coverImage ? (

                        <div className="relative w-full h-72 rounded-xl overflow-hidden">

                            <img
                                src={
                                    coverImage instanceof File
                                    ?
                                    URL.createObjectURL(coverImage)
                                    :
                                    ""
                                }
                                alt="Cover Preview"
                                className="w-24 h-24 object-cover"
                            />


                            {/* Remove Button */}
                            <button
                                type="button"
                                onClick={() => setCoverImage(null)}
                                style={{
                                    position: "absolute",
                                    top: "8px",
                                    right: "8px",
                                    zIndex: 9,
                                    background: "red",
                                    color: "white",
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer"
                                }}
                            >
                                <X size={22}/>
                            </button>

                        </div>

                    ) : (

                        <label className="
                            w-24
                            h-24
                            border-2
                            border-dashed
                            rounded-xl
                            flex
                            flex-col
                            justify-center
                            items-center
                            cursor-pointer
                            hover:border-orange-500
                            transition
                            text-gray-500
                        "
                        >

                            <Upload size={28}/>

                            <p className="text-sm mt-2 text-center">
                                Upload Cover Image
                            </p>


                            <input
                                hidden
                                type="file"
                                accept="image/*"
                                onChange={(e)=>{

                                    const file = e.target.files?.[0];

                                    if(file){

                                        setCoverImage(file);


                                        saveDraftFile(
                                            "coverImage",
                                            file
                                        );

                                    }

                                }}
                            />

                        </label>

                    )}

            </div>


            {/* Gallery Images + Videos + Documents */}
            <div className="bg-white mb-8 rounded-sm border shadow-sm p-6 space-y-10">

                <div className="mb-4">
                    <h2 className="text-xl mb-2 font-semibold">
                        Project Gallery & Attachments
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Upload project photos, videos and supporting documents.
                    </p>
                </div>

                {/* Gallery Images */}
                <div>

                    <div className="flex justify-between mb-5">

                        <h3 className="text-lg font-semibold">
                            Gallery Images
                        </h3>

                        <span className="text-sm text-gray-500">
                            {galleryImages.length}/20
                        </span>

                    </div>


                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">

                        {galleryImages.map((file, index) => (

                            <div
                                key={index}
                                className="relative w-32 h-32 rounded-xl overflow-hidden"
                            >

                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Gallery preview"
                                    className="w-full h-full object-cover"
                                />


                                <button
                                    type="button"
                                    onClick={() => {
                                        const removeGalleryImage =
                                        async(index)=>{


                                        const updated =
                                        galleryImages.filter(
                                        (_,i)=>i!==index
                                        );



                                        setGalleryImages(
                                        updated
                                        );



                                        await saveDraftFiles(
                                        "galleryImages",
                                        prepareFiles(updated)
                                        );


                                        };
                                    }}
                                    style={{
                                        position: "absolute",
                                        top: "8px",
                                        right: "8px",
                                        zIndex: 9999,
                                        background: "red",
                                        color: "white",
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    X
                                </button>

                            </div>

                        ))}



                        {galleryImages.length < 20 && (

                            <label
                                className="
                                    w-24
                                    h-24
                                    border-2
                                    border-dashed
                                    rounded-xl
                                    flex
                                    flex-col
                                    justify-center
                                    items-center
                                    cursor-pointer
                                    hover:border-orange-500
                                    transition
                                    text-gray-500
                                "
                            >

                                <ImagePlus size={28}/>


                                <span className="text-sm mt-2">
                                    Add Images
                                </span>


                                <input
                                    hidden
                                    multiple
                                    type="file"
                                    accept="image/*"
                                    onChange={async(e)=>{

                                        const files = Array.from(
                                        e.target.files
                                        );


                                        const updated=[
                                        ...galleryImages,
                                        ...files
                                        ];


                                        setGalleryImages(updated);


                                        await saveDraftFiles(
                                        "galleryImages",
                                        prepareFiles(updated)
                                        );


                                    }}
                                />

                            </label>

                        )}

                    </div>


                </div>


                {/* Videos */}
                <div>

                    <div className="flex justify-between mb-5">

                        <h3 className="text-lg font-semibold">
                            Project Videos
                        </h3>

                        <span className="text-sm text-gray-500">
                            {videoFiles.length}/10
                        </span>

                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">

                        {videoFiles.map((video,index)=>(

                            <div
                                key={index}
                                className="
                                    relative
                                    bg-gray-50
                                    border
                                    rounded-xl
                                    p-3
                                "
                            >

                                <div
                                    className="
                                        w-full
                                        h-32
                                        rounded-xl
                                        overflow-hidden
                                        bg-black
                                    "
                                >

                                    <video
                                        src={URL.createObjectURL(video.file)}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                        "
                                        controls
                                    />

                                </div>


                                <input
                                    type="text"
                                    value={video.title}
                                    placeholder="Video title"
                                    onChange={(e)=>{

                                        const value=e.target.value;

                                        setVideoFiles(prev =>
                                            prev.map((item,i)=>
                                                i===index
                                                ? {
                                                    ...item,
                                                    title:value
                                                }
                                                :item
                                            )
                                        );

                                    }}
                                    className="
                                        mt-3
                                        w-full
                                        border
                                        rounded-lg
                                        px-3
                                        py-2
                                        text-sm
                                    "
                                />


                                <button
                                    type="button"
                                    onClick={() =>
                                        setVideoFiles(prev =>
                                            prev.filter(
                                                (_,i)=>i!==index
                                            )
                                        )
                                    }
                                    className="
                                        mt-3
                                        text-red-600
                                        hover:bg-red-100
                                        rounded-lg
                                        px-3
                                        py-2
                                        text-sm
                                        transition
                                    "
                                >
                                    Remove
                                </button>


                            </div>

                        ))}

                        {videoFiles.length < 10 && (

                            <label
                                className="
                                    w-24
                                    h-24
                                    border-2
                                    border-dashed
                                    rounded-xl
                                    flex
                                    flex-col
                                    justify-center
                                    items-center
                                    cursor-pointer
                                    hover:border-orange-500
                                    transition
                                    text-gray-500
                                "
                            >

                                <div className="
                                    text-3xl
                                    mb-2
                                ">
                                    +
                                </div>


                                <span className="text-xs">
                                    Add Video
                                </span>



                                <input
                                    hidden
                                    type="file"
                                    accept="video/*"
                                    multiple
                                    onChange={async(e)=>{

                                        const files = Array.from(
                                            e.target.files
                                        );


                                        const updated = [
                                            ...videoFiles,
                                            ...files.map(file => ({
                                                file,
                                                title: file.name.replace(/\.[^/.]+$/, "")
                                            }))
                                        ];


                                        setVideoFiles(updated);


                                        await saveDraftFiles(
                                            "videos",
                                            updated
                                        );


                                        e.target.value = "";

                                    }}
                                />

                            </label>

                        )}

                    </div>


                </div>


                {/* Documents */}
                <div>

                    <div className="flex justify-between mb-5">

                        <h3 className="text-lg font-semibold">
                            Project Documents
                        </h3>

                        <span className="text-sm text-gray-500">
                            {documentFiles.length}/20
                        </span>

                    </div>


                    <div className="space-y-3">


                        {documentFiles.map((document,index)=>(


                            <div
                                key={index}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    bg-gray-50
                                    border
                                    rounded-xl
                                    p-4
                                    hover:bg-gray-100
                                    transition
                                "
                            >


                                <div className="flex items-center gap-4">


                                    <div
                                        className="
                                            w-12
                                            h-12
                                            rounded-lg
                                            bg-orange-100
                                            flex
                                            items-center
                                            justify-center
                                            text-orange-600
                                            font-bold
                                            text-sm
                                        "
                                    >

                                        PDF

                                    </div>



                                    <div>

                                        <p className="font-medium max-w-[250px] truncate">
                                            {document.file.name}
                                        </p>


                                        <p className="text-sm text-gray-500">
                                            {(document.file.size / 1024 / 1024).toFixed(2)} MB
                                        </p>

                                    </div>

                                    <input
                                        type="text"
                                        value={document.title}
                                        placeholder="Document title"
                                        onChange={(e)=>{

                                            const value=e.target.value;

                                            setDocumentFiles(prev=>
                                                prev.map((item,i)=>
                                                    i===index
                                                    ?{
                                                        ...item,
                                                        title:value
                                                    }
                                                    :item
                                                )
                                            );

                                        }}
                                        className="
                                            mt-2
                                            w-full
                                            border
                                            rounded-lg
                                            px-3
                                            py-2
                                            text-sm
                                        "
                                    />


                                </div>



                                <button
                                    type="button"
                                    onClick={() =>
                                        setDocumentFiles(prev =>
                                            prev.filter(
                                                (_,i)=>i!==index
                                            )
                                        )
                                    }
                                    className="
                                        text-red-600
                                        hover:bg-red-100
                                        rounded-lg
                                        px-3
                                        py-2
                                        text-sm
                                        transition
                                    "
                                >

                                    Remove

                                </button>


                            </div>


                        ))}




                        {documentFiles.length < 20 && (

                            <label
                                className="
                                    mt-4
                                    border-2
                                    border-dashed
                                    rounded-xl
                                    h-24
                                    w-24
                                    flex
                                    flex-col
                                    justify-center
                                    items-center
                                    cursor-pointer
                                    hover:border-orange-500
                                    transition
                                    text-gray-500
                                "
                            >

                                <div className="text-3xl">
                                    +
                                </div>


                                <span className="text-sm mt-2 text-center">
                                    Upload Documents
                                </span>



                                <input
                                    hidden
                                    type="file"
                                    multiple
                                    accept="
                                    application/pdf,
                                    application/msword,
                                    application/vnd.openxmlformats-officedocument.wordprocessingml.document
                                    "
                                    onChange={async(e)=>{

                                        const files = Array.from(
                                            e.target.files
                                        );


                                        const updated = [
                                            ...documentFiles,
                                            ...files.map(file => ({
                                                file,
                                                title:file.name.replace(/\.[^/.]+$/,"")
                                            }))
                                        ];


                                        setDocumentFiles(updated);


                                        await saveDraftFiles(
                                            "documents",
                                            updated
                                        );


                                        e.target.value = "";

                                    }}
                                />

                            </label>

                        )}


                    </div>


                </div>



            </div>



        </div>


        {/* ========================= PROJECT INFORMATION ========================= */}
        <div className="bg-white mb-8 rounded-sm border shadow-sm p-8 space-y-10">

            {/* Header */}
            <div className="border-b pb-6">

                <h2 className="text-2xl font-semibold">
                    Project Information
                </h2>

                <p className="text-gray-500 mt-2">
                    Enter the project's client information, timeline, budget and
                    current progress.
                </p>

            </div>



            {/* ========================================================= */}
            {/* CLIENT INFORMATION */}
            {/* ========================================================= */}

            <div className="space-y-6 mt-4 mb-8">

                <div>

                    <h3 className="text-lg font-semibold">
                        Client Information
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Specify the key parties involved in this project.
                    </p>

                </div>



                <div className="grid md:grid-cols-3 gap-6">

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Client
                        </label>

                        <input
                            type="text"
                            value={client}
                            onChange={(e)=>setClient(e.target.value)}
                            placeholder="ABC Properties Ltd."
                            className="
                                w-full
                                rounded-xl
                                border
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />

                    </div>



                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contractor
                        </label>

                        <input
                            type="text"
                            value={contractor}
                            onChange={(e)=>setContractor(e.target.value)}
                            placeholder="Scenthub Realty"
                            className="
                                w-full
                                rounded-xl
                                border
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />

                    </div>



                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Architect
                        </label>

                        <input
                            type="text"
                            value={architect}
                            onChange={(e)=>setArchitect(e.target.value)}
                            placeholder="John Doe Architects"
                            className="
                                w-full
                                rounded-xl
                                border
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />

                    </div>

                </div>

            </div>





            {/* ========================================================= */}
            {/* BUDGET & TIMELINE */}
            {/* ========================================================= */}

            <div className="border-t pt-8 space-y-6 mb-8">

                <div>

                    <h3 className="text-lg font-semibold">
                        Budget & Timeline
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Set the financial details and project duration.
                    </p>

                </div>



                <div className="grid md:grid-cols-3 gap-6">

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Budget
                        </label>

                        <input
                            type="number"
                            value={budget}
                            onChange={(e)=>setBudget(e.target.value)}
                            placeholder="500000000"
                            className="
                                w-full
                                rounded-xl
                                border
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />

                    </div>



                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Currency
                        </label>

                        <select
                            value={currency}
                            onChange={(e)=>setCurrency(e.target.value)}
                            className="
                                w-full
                                rounded-xl
                                border
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        >

                            <option>NGN</option>
                            <option>USD</option>
                            <option>GBP</option>
                            <option>EUR</option>

                        </select>

                    </div>



                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Duration
                        </label>

                        <input
                            type="text"
                            value={duration}
                            onChange={(e)=>setDuration(e.target.value)}
                            placeholder="18 Months"
                            className="
                                w-full
                                rounded-xl
                                border
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />

                    </div>

                </div>



                <div className="grid md:grid-cols-2 gap-6">

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Start Date
                        </label>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e)=>setStartDate(e.target.value)}
                            className="
                                w-full
                                rounded-xl
                                border
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />

                    </div>



                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Completion Date
                        </label>

                        <input
                            type="date"
                            value={completionDate}
                            onChange={(e)=>setCompletionDate(e.target.value)}
                            className="
                                w-full
                                rounded-xl
                                border
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />

                    </div>

                </div>

            </div>






            {/* ========================================================= */}
            {/* PROJECT STATUS */}
            {/* ========================================================= */}

            <div className="border-t pt-8 space-y-6 mb-8">

                <div>

                    <h3 className="text-lg font-semibold">
                        Project Status
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Track the current stage and completion percentage.
                    </p>

                </div>



                <div className="grid md:grid-cols-2 gap-8">

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Status
                        </label>

                        <select
                            value={statusValue}
                            onChange={(e)=>setStatusValue(e.target.value)}
                            className="
                                w-full
                                rounded-xl
                                border
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        >

                            <option>Planning</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                            <option>On Hold</option>

                        </select>

                    </div>



                    <div>

                        <div className="flex justify-between items-center mb-3">

                            <label className="text-sm font-medium text-gray-700">
                                Progress
                            </label>

                            <span className="font-semibold text-orange-600">
                                {progress}%
                            </span>

                        </div>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={(e)=>setProgress(e.target.value)}
                            className="
                                w-full
                                accent-orange-600
                            "
                        />

                    </div>

                </div>

            </div>

        </div>

        {/* ========================= PROJECT SPECIFICATIONS ========================= */}
        <div className="bg-white mb-8 rounded-sm border shadow-sm p-8 space-y-10">

            {/* Header */}
            <div className="border-b pb-6 mb-8">

                <h2 className="text-2xl font-semibold">
                    Project Specifications
                </h2>

                <p className="text-gray-500 mt-2">
                    Define the building specifications, construction methods and
                    project attributes.
                </p>

            </div>



            {/* ========================================================= */}
            {/* BUILDING STATISTICS */}
            {/* ========================================================= */}

            <div className="space-y-6 mb-8">

                <div>

                    <h3 className="text-lg font-semibold">
                        Building Statistics
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Basic measurements and accommodation details.
                    </p>

                </div>


                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">

                    {[
                        ["floors","Floors"],
                        ["bedrooms","Bedrooms"],
                        ["bathrooms","Bathrooms"],
                        ["parkingSpaces","Parking"],
                        ["area","Area (sqm)"],
                    ].map(([key,label])=>(

                        <div key={key}>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {label}
                            </label>

                            <input
                                type="number"
                                value={statistics[key]}
                                onChange={(e)=>

                                    setStatistics(prev=>({
                                        ...prev,
                                        [key]:e.target.value
                                    }))

                                }
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    px-4
                                    py-3
                                    outline-none
                                    focus:ring-2
                                    focus:ring-orange-500
                                "
                            />

                        </div>

                    ))}

                </div>

            </div>


            {/* ========================================================= */}
            {/* CONSTRUCTION DETAILS */}
            {/* ========================================================= */}

            <div className="border-t pt-8 space-y-6 mb-8">

                <div>

                    <h3 className="text-lg font-semibold">
                        Construction Details
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Specify the construction methods and systems used.
                    </p>

                </div>


                <div className="grid md:grid-cols-2 gap-6">

                    {[
                        ["foundation","Foundation"],
                        ["structure","Structure"],
                        ["roofing","Roofing"],
                        ["finishing","Finishing"],
                        ["electrical","Electrical"],
                        ["plumbing","Plumbing"],
                    ].map(([key,label])=>(

                        <div key={key}>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {label}
                            </label>

                            <input
                                type="text"
                                value={constructionDetails[key]}
                                onChange={(e)=>

                                    setConstructionDetails(prev=>({
                                        ...prev,
                                        [key]:e.target.value
                                    }))

                                }
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    px-4
                                    py-3
                                    outline-none
                                    focus:ring-2
                                    focus:ring-orange-500
                                "
                            />

                        </div>

                    ))}

                </div>

            </div>






            {/* ========================================================= */}
            {/* PROJECT ATTRIBUTES */}
            {/* ========================================================= */}

            <div className="border-t pt-8 space-y-8">

                <div>

                    <h3 className="text-lg font-semibold">
                        Project Attributes
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 mb-4">
                        Add services, materials, features and searchable tags.
                    </p>

                </div>


                <div className="grid xl:grid-cols-2 gap-8">

                    <ChipInput
                        title="Services"
                        items={services}
                        setItems={setServices}
                        input={serviceInput}
                        setInput={setServiceInput}
                        placeholder="Concrete Casting"
                    />

                    <ChipInput
                        title="Materials"
                        items={materials}
                        setItems={setMaterials}
                        input={materialInput}
                        setInput={setMaterialInput}
                        placeholder="Reinforced Concrete"
                    />

                    <ChipInput
                        title="Features"
                        items={features}
                        setItems={setFeatures}
                        input={featureInput}
                        setInput={setFeatureInput}
                        placeholder="Swimming Pool"
                    />

                    <ChipInput
                        title="Project Tags"
                        items={tags}
                        setItems={setTags}
                        input={tagInput}
                        setInput={setTagInput}
                        placeholder="Luxury"
                    />

                </div>

            </div>

        </div>

        {/* ========================= PROJECT MANAGEMENT ========================= */}
        <div className="bg-white mb-8 rounded-sm border shadow-sm p-8 space-y-10">

            {/* Header */}
            <div className="border-b pb-6 mb-8">

                <h2 className="text-2xl font-semibold">
                    Project Management
                </h2>

                <p className="text-gray-500 mt-2">
                    Manage the project team and track important milestones throughout
                    the construction process.
                </p>

            </div>



            {/* ========================================================= */}
            {/* PROJECT TEAM */}
            {/* ========================================================= */}

            <div className="space-y-6">

                <div>

                    <h3 className="text-lg font-semibold">
                        Project Team
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Add consultants, contractors and other key personnel.
                    </p>

                </div>



                <div className="grid lg:grid-cols-3 gap-5">

                    <div>

                        <label className="block text-sm font-medium mb-2">
                            Role
                        </label>

                        <input
                            placeholder="Architect"
                            value={teamRole}
                            onChange={(e)=>setTeamRole(e.target.value)}
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                focus:ring-2
                                focus:ring-orange-500
                                outline-none
                            "
                        />

                    </div>



                    <div>

                        <label className="block text-sm font-medium mb-2">
                            Name
                        </label>

                        <input
                            placeholder="John Doe"
                            value={teamName}
                            onChange={(e)=>setTeamName(e.target.value)}
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                focus:ring-2
                                focus:ring-orange-500
                                outline-none
                            "
                        />

                    </div>



                    <div>

                        <label className="block text-sm font-medium mb-2">
                            Company
                        </label>

                        <input
                            placeholder="ABC Architects"
                            value={teamCompany}
                            onChange={(e)=>setTeamCompany(e.target.value)}
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                focus:ring-2
                                focus:ring-orange-500
                                outline-none
                            "
                        />

                    </div>

                </div>



                <button
                    type="button"
                    onClick={()=>{

                        if(!teamRole || !teamName) return;

                        setTeam([
                            ...team,
                            {
                                role:teamRole,
                                name:teamName,
                                company:teamCompany
                            }
                        ]);

                        setTeamRole("");
                        setTeamName("");
                        setTeamCompany("");

                    }}
                    className="
                        bg-orange-600
                        hover:bg-orange-700
                        text-black
                        px-6
                        py-3
                        rounded-xl
                        transition
                    "
                >
                    Add Team Member
                </button>



                {team.length > 0 && (

                    <div className="space-y-3">

                        {team.map((member,index)=>(

                            <div
                                key={index}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    border
                                    bg-gray-50
                                    p-4
                                "
                            >

                                <div>

                                    <h4 className="font-semibold">
                                        {member.name}
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        {member.role}
                                        {member.company &&
                                            ` • ${member.company}`
                                        }
                                    </p>

                                </div>



                                <button
                                    type="button"
                                    onClick={()=>
                                        setTeam(
                                            team.filter((_,i)=>i!==index)
                                        )
                                    }
                                    className="
                                        text-black
                                        hover:text-red-700
                                        font-medium
                                    "
                                >
                                    Remove
                                </button>

                            </div>

                        ))}

                    </div>

                )}

            </div>





            {/* ========================================================= */}
            {/* PROJECT MILESTONES */}
            {/* ========================================================= */}

            <div className="border-t pt-8 space-y-6">

                <div>

                    <h3 className="text-lg font-semibold">
                        Project Milestones
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Record important construction milestones and completion dates.
                    </p>

                </div>



                <div className="grid lg:grid-cols-3 gap-5">

                    <div>

                        <label className="block text-sm font-medium mb-2">
                            Milestone
                        </label>

                        <input
                            placeholder="Foundation Completed"
                            value={milestoneTitle}
                            onChange={(e)=>setMilestoneTitle(e.target.value)}
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                focus:ring-2
                                focus:ring-orange-500
                                outline-none
                            "
                        />

                    </div>



                    <div>

                        <label className="block text-sm font-medium mb-2">
                            Description
                        </label>

                        <input
                            placeholder="Completed foundation casting"
                            value={milestoneDescription}
                            onChange={(e)=>
                                setMilestoneDescription(e.target.value)
                            }
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                focus:ring-2
                                focus:ring-orange-500
                                outline-none
                            "
                        />

                    </div>



                    <div>

                        <label className="block text-sm font-medium mb-2">
                            Date
                        </label>

                        <input
                            type="date"
                            value={milestoneDate}
                            onChange={(e)=>setMilestoneDate(e.target.value)}
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                focus:ring-2
                                focus:ring-orange-500
                                outline-none
                            "
                        />

                    </div>

                </div>



                <button
                    type="button"
                    onClick={()=>{

                        if(!milestoneTitle) return;

                        setMilestones([
                            ...milestones,
                            {
                                title:milestoneTitle,
                                description:milestoneDescription,
                                date:milestoneDate,
                                completed:true
                            }
                        ]);

                        setMilestoneTitle("");
                        setMilestoneDescription("");
                        setMilestoneDate("");

                    }}
                    className="
                        bg-orange-600
                        hover:bg-orange-700
                        text-black
                        px-6
                        py-3
                        rounded-xl
                        transition
                    "
                >
                    Add Milestone
                </button>



                {milestones.length > 0 && (

                    <div className="space-y-3">

                        {milestones.map((item,index)=>(

                            <div
                                key={index}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    border
                                    bg-gray-50
                                    p-4
                                "

                            >

                                <div>

                                    <h4 className="font-semibold">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        {item.description}
                                    </p>

                                    {item.date && (

                                        <p className="text-xs text-gray-400 mt-1">
                                            {item.date}
                                        </p>

                                    )}

                                </div>



                                <button
                                    type="button"
                                    onClick={()=>
                                        setMilestones(
                                            milestones.filter((_,i)=>i!==index)
                                        )
                                    }
                                    className="
                                        text-red-600
                                        hover:text-red-700
                                        font-medium
                                    "
                                >
                                    Remove
                                </button>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>


        {/* ========================= ADDITIONAL SETTINGS ========================= */}
        <div className="bg-white mb-8 rounded-sm border shadow-sm p-8 space-y-10">

            {/* Header */}
            <div className="border-b pb-6 mb-8">

                <h2 className="text-2xl font-semibold">
                    Additional Settings
                </h2>

                <p className="text-gray-500 mt-2">
                    Manage virtual tours, client feedback, search visibility and
                    publishing options.
                </p>

            </div>

            {/* ========================================================= */}
            {/* VIRTUAL TOUR */}
            {/* ========================================================= */}

            <div className="space-y-6 mb-8">


                <div>

                    <h3 className="text-lg font-semibold">
                        Virtual Tour
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Add a 3D walkthrough or external project tour link.
                    </p>

                </div>



                <div className="grid md:grid-cols-2 gap-6">


                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Provider
                        </label>


                        <select
                            value={virtualTourProvider}
                            onChange={(e)=>
                                setVirtualTourProvider(e.target.value)
                            }
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        >

                            <option>
                                Matterport
                            </option>

                            <option>
                                YouTube
                            </option>

                            <option>
                                Other
                            </option>


                        </select>


                    </div>




                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tour URL
                        </label>


                        <input
                            type="text"
                            value={virtualTourUrl}
                            onChange={(e)=>
                                setVirtualTourUrl(e.target.value)
                            }
                            placeholder="https://..."
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />


                    </div>


                </div>


            </div>



            {/* ========================================================= */}
            {/* TESTIMONIAL */}
            {/* ========================================================= */}

            <div className="border-t pt-8 space-y-6">

                <div>

                    <h3 className="text-lg font-semibold">
                        Client Testimonial
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                        Add feedback from the project owner or client.
                    </p>

                </div>




                <div className="grid md:grid-cols-3 gap-6">


                    <div>

                        <label className="block text-sm font-medium mb-2">
                            Client Name
                        </label>


                        <input
                            placeholder="Mr. Adewale"
                            value={testimonialName}
                            onChange={(e)=>
                                setTestimonialName(e.target.value)
                            }
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />


                    </div>




                    <div>

                        <label className="block text-sm font-medium mb-2">
                            Company
                        </label>


                        <input
                            placeholder="ABC Holdings"
                            value={testimonialCompany}
                            onChange={(e)=>
                                setTestimonialCompany(e.target.value)
                            }
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />


                    </div>




                    <div>

                        <label className="block text-sm font-medium mb-2">
                            Position
                        </label>


                        <input
                            placeholder="Managing Director"
                            value={testimonialPosition}
                            onChange={(e)=>
                                setTestimonialPosition(e.target.value)
                            }
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        />


                    </div>


                </div>





                <div>


                    <label className="block text-sm font-medium mb-2">
                        Testimonial Message
                    </label>


                    <textarea
                        rows="5"
                        placeholder="Write client's feedback..."
                        value={testimonialMessage}
                        onChange={(e)=>
                            setTestimonialMessage(e.target.value)
                        }
                        className="
                            w-full
                            border
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            focus:ring-2
                            focus:ring-orange-500
                        "
                    />


                </div>

                <div className="mb-4">

                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Client Image
                    </label>


                    {testimonialImage ? (

                        <div className="
                            relative
                            w-24
                            h-24
                            rounded-xl
                            overflow-hidden
                            border
                            group
                        ">

                            <img
                                src={URL.createObjectURL(testimonialImage)}
                                alt="Client Preview"
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                "
                            />


                            <button
                                type="button"
                                onClick={() => setTestimonialImage(null)}
                                style={{
                                    position: "absolute",
                                    top: "8px",
                                    right: "8px",
                                    zIndex: 9999,
                                    background: "red",
                                    color: "white",
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer"
                                }}
                            >
                                ×
                            </button>


                        </div>


                    ) : (

                        <label
                            className="
                                w-56
                                h-40
                                border-2
                                border-dashed
                                rounded-xl
                                flex
                                flex-col
                                items-center
                                justify-center
                                cursor-pointer
                                text-gray-500
                                hover:border-orange-500
                                hover:text-orange-600
                                transition
                                text-center
                                px-4
                            "
                        >

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-orange-50
                                    flex
                                    items-center
                                    justify-center
                                    mb-3
                                "
                            >
                                <Upload size={22}/>
                            </div>


                            <span className="
                                text-sm
                                font-medium
                                leading-tight
                            ">
                                Upload Client Photo
                            </span>


                            <span className="
                                text-xs
                                text-gray-400
                                mt-2
                            ">
                                PNG, JPG up to 5MB
                            </span>



                            <input
                                hidden
                                type="file"
                                accept="image/*"
                                onChange={(e)=>{

                                    const file = e.target.files?.[0];

                                    if(file){
                                        setTestimonialImage(file);
                                    }

                                    e.target.value="";

                                }}
                            />

                        </label>
                    )}

                </div>
            </div>


            {/* ========================================================= */}
            {/* SEO SETTINGS */}
            {/* ========================================================= */}

            <div className="border-t pt-8 space-y-6 mb-8">


                <div>

                    <h3 className="text-lg font-semibold">
                        SEO Settings
                    </h3>


                    <p className="text-sm text-gray-500 mt-1">
                        Improve how this project appears on search engines.
                    </p>


                </div>





                <div>


                    <label className="block text-sm font-medium mb-2">
                        Meta Title
                    </label>


                    <input
                        placeholder="Luxury 5 Bedroom Duplex in Lagos"
                        value={metaTitle}
                        onChange={(e)=>
                            setMetaTitle(e.target.value)
                        }
                        className="
                            w-full
                            border
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            focus:ring-2
                            focus:ring-orange-500
                        "
                    />


                </div>





                <div>


                    <label className="block text-sm font-medium mb-2">
                        Meta Description
                    </label>


                    <textarea
                        rows="4"
                        placeholder="Describe the project for search engines..."
                        value={metaDescription}
                        onChange={(e)=>
                            setMetaDescription(e.target.value)
                        }
                        className="
                            w-full
                            border
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            focus:ring-2
                            focus:ring-orange-500
                        "
                    />


                </div>


            </div>








            {/* ========================================================= */}
            {/* PUBLISHING */}
            {/* ========================================================= */}

            <div className="border-t pt-8 space-y-6">


                <div>

                    <h3 className="text-lg font-semibold">
                        Publishing
                    </h3>


                    <p className="text-sm text-gray-500 mt-1">
                        Control project visibility on the website.
                    </p>


                </div>





                <div className="space-y-5">


                    <label className="
                        flex
                        items-center
                        gap-3
                        cursor-pointer
                    ">

                        <input
                            type="checkbox"
                            checked={featured}
                            onChange={(e)=>
                                setFeatured(e.target.checked)
                            }
                            className="
                                w-5
                                h-5
                                accent-orange-600
                            "
                        />


                        <span>
                            Featured Project
                        </span>


                    </label>






                    <label className="
                        flex
                        items-center
                        gap-3
                        cursor-pointer
                    ">


                        <input
                            type="checkbox"
                            checked={visible}
                            onChange={(e)=>
                                setVisible(e.target.checked)
                            }
                            className="
                                w-5
                                h-5
                                accent-orange-600
                            "
                        />


                        <span>
                            Visible on Website
                        </span>


                    </label>







                    <div className="max-w-sm">


                        <label className="block text-sm font-medium mb-2">
                            Approval Status
                        </label>


                        <select
                            value={approvalStatus}
                            onChange={(e)=>
                                setApprovalStatus(e.target.value)
                            }
                            className="
                                w-full
                                border
                                rounded-xl
                                px-4
                                py-3
                                outline-none
                                focus:ring-2
                                focus:ring-orange-500
                            "
                        >

                            <option>
                                Draft
                            </option>


                            <option>
                                Published
                            </option>


                            <option>
                                Archived
                            </option>


                        </select>


                    </div>


                </div>


            </div>



        </div>

        {/* Submit */}


        {
            showUploadBox && (
                <div className="
                bg-white
                rounded-2xl
                border
                p-6
                mb-8
                ">


                <h3 className="font-semibold text-lg">
                Project Upload
                </h3>


                <div className="mt-4 space-y-3">


                <div>
                📦 Size:
                <strong>
                {totalSize}
                </strong>
                </div>


                <div>
                📁 Files:
                <strong>
                {fileCount}
                </strong>
                </div>


                <div>
                ⏱ Time:
                <strong>
                {elapsedTime}s
                </strong>
                </div>


                </div>



                <div className="mt-5">


                <div className="flex justify-between text-sm">

                <span>
                Browser Upload
                </span>

                <span>
                    {Math.round(uploadProgress)}%
                </span>

                </div>


                <div className="
                h-3
                bg-gray-200
                rounded-full
                overflow-hidden
                ">


                <div
                className="
                h-full
                bg-orange-500
                transition-all
                "
                style={{
                    width: `${Math.round(uploadProgress)}%`
                }}
                />


                </div>


                </div>





                {
                uploadStage==="cloudinary" &&

                <div className="mt-4">

                ☁️ Cloudinary:

                <strong>
                {currentFile}
                </strong>


                <div>

                {cloudinaryProgress}%

                </div>

                </div>

                }





                <div className="mt-4 text-gray-600">

                {uploadMessage}

                </div>



                {
                totalTime &&

                <div className="
                mt-5
                bg-green-50
                border
                rounded-xl
                p-4
                ">

                ✅ Upload Complete

                <br/>

                Total time:

                <strong>
                {formatTime(totalTime)}
                </strong>


                </div>

                }


                </div>
                )
        }
        <div className="flex justify-end gap-4 pb-10">


            <button
            type="button"
            onClick={async()=>{

            setDraftStatus("Saving...");

            await saveDraft();

            setDraftStatus("Saved");

            }}
            className="
            px-8 py-3
            rounded-xl
            border
            "
            >

            Save Draft

            </button>


            <button
                type="submit"
                disabled={uploading}
                className="
                    px-10 py-3
                    rounded-xl
                    bg-norms
                    hover:bg-orange-700
                    text-white
                    font-normal
                    disabled:opacity-50
                "
            >

            {
                uploading
                ?
                "Uploading Project..."
                :
                "Publish Project"
            }


            </button>


        </div>

      </form>

    </div>
  );
}