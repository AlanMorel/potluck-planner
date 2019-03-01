<template>
    <div class="modal" :class="{'show-modal': modal.opened }">
        <div class="modal-content l-container" :class="modal.state">
            <button class="close-button" @click="closeModal">✕</button>
            <div>
                <h2>Invite Guests</h2>
                <div>
                    Share this link with your guests.
                </div>
                <div>
                    <input type="text" :value="link" class="link" disabled />
                </div>
                <div>
                    <button class="modal-button">Email</button>
                    <button class="modal-button">Text</button>
                    <button class="modal-button">Share with Paperless Post</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ShareModal",
        data() {
            return {
                link: "https://thespruceeats.com/potluck/DK84ND"
            }
        },
        computed: {
            modal() {
                return this.$store.getters.getModal;
            }
        },
        methods: {
            closeModal() {
                var modal = {
                    opened: false
                };
                this.$store.commit("updateModal", modal);
            }
        }
    }
</script>

<style lang="scss">
    $primary-color: #2c3e50;
    $active-color: #607d8b;

    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;

        h2 {
            margin-bottom: 1rem;
        }
    }

    .modal-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 1rem 1.5rem 2rem;
        border-radius: 0.25rem;
        max-width: 30rem;
        max-height: 90%;
        overflow-y: auto;
        width: 100%;
    }

    .show-modal {
        opacity: 1;
        visibility: visible;
        transform: scale(1.0);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
        z-index: 4;
    }

    .close-button {
        float: right;
        padding: 0.25rem;
    }

    input[type="text"].link {
        border: solid 1px lighten($primary-color, 50%);
        border-radius: 0.25rem;
        margin-top: 1rem;
        padding: 0.5rem 0.75rem;
    }

    .modal-button {
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        margin-top: 0.75rem;
        margin-right: 1rem;
        transition: all 0.1s ease;
        background-color: $primary-color;
        color: white;
        border: solid 1px $primary-color;

        &:hover {
            border: solid 1px $active-color;
            background-color: $active-color;
        }
    }
</style>
